import styles from '@/styles/Home.module.css'

const Design_system = () => {
    return ( 
            <main>
      <section className='container m-component-b2'>
        <h1 className='uppercase m-component-b1 margin-t-1'>Design system</h1>
        <h2 className='uppercase numbered-titles'><span>01</span> colors</h2>
        <div className='dflex gap-1 '>
       
          <div className='width-100'>
            <div className={`bg-dark text-white ff-serif  fs-500 ${styles.card_color_box}`} >#0B0D17</div>
            <p><span className='text-accent'>RGB</span> 11, 13, 23</p>
            <p><span className='text-accent'>HSL</span> 230°, 35%, 7%</p>
          </div>

          <div className='width-100'>
            <div className={`bg-accent text-dark ff-serif  fs-500 ${styles.card_color_box}`}>#D0D6F9</div>
            <p><span className='text-accent'>RGB</span> 208, 214, 249</p>
            <p><span className='text-accent'>HSL</span> 231°, 77%, 90%</p>
          </div>

          <div className='width-100'>
            <div className={`bg-light text-dark ff-serif  fs-500 ${styles.card_color_box}`} >#FFFFFF</div>
            <p><span className='text-accent'>RGB</span> 255, 255, 255</p>
            <p><span className='text-accent'>HSL</span> 0°, 0%, 100%</p>
          </div>

        </div>
      </section>
      
      <section id="typography" className='container  m-component-b2'>
                <h2 className='numbered-titles'><span>02 </span>Typography</h2>
                <div class="dflex gap-1">
                    <div className='width-100 flow'>
                        <div > 
                            <p className='text-accent'>Heading 1 - Bellefair Regular - 150px</p>
                            <p className='fs-900 ff-serif uppercase'>Earth</p>
                        </div>
                        <div> 
                            <p className='text-accent'>Heading 2 - Bellefair Regular - 100px</p>
                            <p className='fs-800 ff-serif uppercase'>Venus</p>
                        </div>
                        <div> 
                            <p className='text-accent'>Heading 3 - Bellefair Regular - 56px</p>
                            <p className='fs-700 ff-serif uppercase'>Jupiter & Saturn</p>
                        </div>
                        <div> 
                            <p className='text-accent'>Heading 4 - Bellefair Regular - 32px</p>
                            <p className='fs-600 ff-serif uppercase'>Uranus, Neptune, & Pluto</p>
                        </div>
                        <div> 
                            <p className='text-accent '>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                            <p className='ff-sans-cond uppercase letter-spacing-1 text-accent'>So, you want to travel to space</p>
                        </div>
                    
                    </div>
                    
                    <div  className='width-100 flow'>
                        <div> 
                            <p className='text-accent'>Subheading 1 - Bellefair Regular - 28px</p>
                            <p className='ff-serif fs-500 uppercase'>384,400 km</p>
                        </div>
                        <div> 
                            <p className='text-accent'>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <p className='ff-sans-cond fs-200 uppercase letter-spacing-3'>Avg. Distance</p>
                        </div>
                        <div> 
                            <p className='text-accent'>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                            <p className='ff-sans-cond fs-300 uppercase letter-spacing-2'>Europa</p>
                        </div>
                        <div> 
                            <p className='text-accent'>Body Text</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. 
                              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. 
                              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, 
                              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. 
                              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. 
                              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc 
                              tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, 
                              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. 
                              In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container flow inter-elements_section'>
              <h2 className='numbered-titles '><span>03</span>Interactive Elements</h2>
          
                    <nav>
                        <ul class="primary-navigation letter-spacing-2 underline-indicators nav-center">
                            <li className='active'><a href="#"><span>01</span>Active</a></li>
                            <li><a href="#"><span>02</span>Hovered</a></li>
                            <li><a href="#"><span>03</span>Idle</a></li>
                        </ul>
                    </nav>
            <div className='flex'>
            <div className='width-100 inter-active-buttons'>
                   <button data-type='explore-btn'>Explore</button>
            </div>

              <div className='width-100 flow inter-active-buttons' >
                <div className='tab-list underline-indicators flex'>
                  <button aria-selected="true" className='uppercase text-accent ff-sans-cond bg-dark
                   letter-spacing-2'>Moon</button>
                  <button aria-selected="false" className='uppercase text-accent ff-sans-cond bg-dark 
                  letter-spacing-2'>Mars</button>
                  <button aria-selected="false" className='uppercase text-accent ff-sans-cond bg-dark 
                  letter-spacing-2'>Europa</button>
                </div>

                <div class="dot-indicators flex">
                     <button aria-selected="true"><span class="sr-only">Slide title</span></button>
                     <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                     <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                </div>

                <div class="num-indicators flex-column">
                     <button aria-selected="true">1</button>
                     <button aria-selected="false">2</button>
                     <button aria-selected="false">3</button>
                </div>
                </div>

           

              </div>

            </section>
     </main>
     
     );
}
 
export default Design_system;