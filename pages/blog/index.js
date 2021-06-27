import { useEffect, useRef, useState } from "react";

// library
import Image from "next/image";
import Link from 'next/link'
import { gsap, Power3, TimelineLite } from "gsap";

// components
import { Layout } from "../../components";
import { blogs } from '../../blogs';
import { useWindowSize } from "../../utilities/useLayoutEffect";
import { useScrollPosition } from "../../utilities/useScroll";

// assets
import styles from '../../styles/Blog.module.scss';
import placeholderBlog from '../../public/images/placeholder-blog.png'

const duration = 3;
const tabs = ['productivity', 'growth', 'press', 'tech'];
export default function Blog() {
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  const [activeTab, setActiveTab] = useState('');

  const handleChaneTab = (e) => {
    setActiveTab(e.target.value === activeTab ? '' : e.target.value)
  }
  const filtered = blogs.filter(blog => blog.categories[0].includes(activeTab.toLowerCase()));

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let sectionOne = useRef(null);
  const t2 = new TimelineLite();
  let sectionTwo = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(sectionOne, {opacity: 1, x: '0', ease: Power3.easeOut, duration: duration});
      if (scroll > (sectionTwo.offsetTop - window.innerHeight + 100)) {
        t2.to(sectionTwo, {opacity: 1, x: '0', ease: Power3.easeOut, duration: duration})
      }
      if (scroll > (sectionThree.offsetTop - window.innerHeight + 100)) {
        t3.to(sectionThree, {opacity: 1, x: '0', ease: Power3.easeOut, duration: duration})
      }
    }
  }, [width, scroll, t1, t2, t3]);

  return (
    <Layout>
      <section  className={`${styles.title} title`}>
        <div ref={el => sectionOne = el} className='container'>
          <h1>The Undone Blog</h1>
          <p>Tips, stories, and our musings on everything in between.</p>
          <h4>Most recent</h4>
        </div>
      </section>
      <section className={`${styles.content} content`}>
        <div  ref={el => sectionTwo = el} className='container'>
          <div className={`${styles.tabs} mobile`}>
            {tabs.map(tab => (
              <button key={tab}
                      type='button'
                      className={activeTab === tab ? styles.active : ''}
                      onClick={() => setActiveTab(tab === activeTab ? '' : tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className={`${styles.tabs} desktop`}>
            <select
              value={activeTab}
              onChange={(e) => handleChaneTab(e)}>
              {tabs.map(tab => (
                <option key={tab}
                        value={tab}>
                  {tab.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inner}>
            {filtered.map((blog, index) => (
              <Link key={index} href='#'>
                <a className={styles.item}>
                  <div className={styles.image}><Image src={placeholderBlog} alt='blog' /></div>
                  <h6>{blog.categories}</h6>
                  <h5>{blog.title}</h5>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.get} get`}>
        <div ref={el => sectionThree = el}  className='container'>
          <div className={styles.inner}>
            <h2>Get started with Undone</h2>
            <p>
              A better experience for your team, fewer headaches in your quest to get things done. Set yourself up for
              success in minutes.
            </p>
            <button type='btn' className='btn-filled'>Start free trial</button>

          </div>
        </div>
      </section>
    </Layout>
  );
}
