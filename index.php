<?php
include 'blog.head.php';
?>


<section class="home">
    <div class="mobile-menu-btn">
        <button class="default-off" onclick="showMobileNav()"> 
            <i class="fas fa-bars"></i>
        </button>
    </div>

    <div class="mobile-nav">
        <button class="default-off" onclick="closeMobileNav()"> 
            <i class="fas fa-times"></i>
        </button>
        <a href="./"><img src="Admin_config/Assets/logo1.png" alt="techgede logo"></a>
        <div class="nav-btn">
            <button style="animation:fadeInUp 1.3s 0ms forwards; visibility:hidden"> <i class="fas fa-home"></i>
                <span>HOME</span>
            </button>
            <button style="animation:fadeInUp 1.3s 400ms forwards; visibility:hidden" onclick="showTutorials(this)">
                <i class="fas fa-book-open"></i>
                <span>TUTORIALS</span></i>
                <span class="drop-angle">&#9662;</span>
            </button>
            <div class="tutorial-dropdown">
                <ul>
                    <li>Frontend development</li>
                    <li>Graphics Design</li>
                    <li>3D Animation</li>
                    <li>Backend development</li>
                    <li>Computer Appreciation</li>
                    <li>RDMS</li>
                </ul>
            </div>
            <button style="animation:fadeInUp 1.3s 800ms forwards; visibility:hidden" onclick="showServices(this)">
                <i class="fas fa-flag"></i>
                <span>SERVICES</span>
                <span class="drop-angle">&#9662;</span>
            </button>
        </div>

        <div class="service-dropdown">
            <ul>
                <li>Virtual Training</li>
                <li>Offline Classes</li>
                <li>Private training</li>
            </ul>
        </div>
    <div class="dropdown-wrapper"></div>
    </div>
    <nav>
        <a href="./"><img src="Admin_config/Assets/logo1.png" alt="techgede logo"></a>
        <div class="nav-btn">
            <button> <i class="fas fa-home"></i>
                <span>HOME</span>
            </button>
            <button onclick="showTutorials(this)">
                <i class="fas fa-book-open"></i>
                <span>TUTORIALS</span></i>
                <span class="drop-angle">&#9662;</span>
            </button>
            <button onclick="showServices(this)">
                <i class="fas fa-flag"></i>
                <span>SERVICES</span>
                <span class="drop-angle">&#9662;</span>
            </button>
        </div>
            <div class="tutorial-dropdown">
                <ul>
                    <li>Frontend development</li>
                    <li>Graphics Design</li>
                    <li>3D Animation</li>
                    <li>Backend development</li>
                    <li>Computer Appreciation</li>
                    <li>RDMS</li>
                </ul>
            </div>
    
    
        <div class="service-dropdown">
            <ul>
                <li>Virtual Training</li>
                <li>Offline Classes</li>
                <li>Private training</li>
            </ul>
        </div>
    <div class="dropdown-wrapper"></div>
    </nav>


<div class="bg-images">
    <img class="fadeIn2 bg-img" src="Admin_config/Assets/images (18).jpeg" alt="">
</div>
    <div class="info">
        <div class="slideInTop">
            <h1>Welcome to TechEdge</h1>
            <p>Get the best tech articles all in one cool place</p>
        </div>

        <button class="slideInBottom"><span>Get Started</span>
        <i class="fas fa-long-arrow-alt-right"></i></button>
    </div>

    <div class="dots">
        <div class="active" id="0" onclick="setImage()"></div>
          <div id="1" onclick="setImage(this)"></div>
          <div id="2" onclick="setImage(this)"></div>
          <div id="3" onclick="setImage(this)"></div>
          <div id="4" onclick="setImage(this)"></div>
    </div>
    <button class="direction"> 
       <a href="#pullup"><i class="fas fa-angle-down"></i></a> 
    </button>
</section>

<section class="horizontal-recent-post" id="pullup">
    <button class="control-angles left">
        <i class="fas fa-angle-left"></i>
    </button>

    <div class="postSlider">
    <a href="">
        <div class="post">
                
            <div class="picture">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
                <div class="date-created"> <i class="fas fa-calendar"></i> <span>15 June, 2021</span> </div>
                <div class="author"> <i class="fas fa-user"></i> <span> Ubong James</span></div>
                <div class="title">How to start blog in 10 min</div>
                <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, deleniti. Nemo, a vitae autem quaerat obcaecati us...</div>

                <div class="btn">
                    <button class="view magicButton2">View</button>
                </div>
                
                <div id="postId"></div>
        </div>
    </a>
    <a href="">
        <div class="post">
                
            <div class="picture">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
                <div class="date-created"> <i class="fas fa-calendar"></i> <span>15 June, 2021</span> </div>
                <div class="author"> <i class="fas fa-user"></i> <span> Ubong James</span></div>
                <div class="title">How to start blog in 10 min</div>
                <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, deleniti. Nemo, a vitae autem quaerat obcaecati us...</div>

                <div class="btn">
                    <button class="view magicButton2">View</button>
                </div>
                
                <div id="postId"></div>
        </div>
    </a>
    <a href="">
        <div class="post">
                
            <div class="picture">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
                <div class="date-created"> <i class="fas fa-calendar"></i> <span>15 June, 2021</span> </div>
                <div class="author"> <i class="fas fa-user"></i> <span> Ubong James</span></div>
                <div class="title">How to start blog in 10 min</div>
                <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, deleniti. Nemo, a vitae autem quaerat obcaecati us...</div>

                <div class="btn">
                    <button class="view magicButton2">View</button>
                </div>
                
                <div id="postId"></div>
        </div>
    </a>
    <a href="">
        <div class="post">
                
            <div class="picture">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
                <div class="date-created"> <i class="fas fa-calendar"></i> <span>15 June, 2021</span> </div>
                <div class="author"> <i class="fas fa-user"></i> <span> Ubong James</span></div>
                <div class="title">How to start blog in 10 min</div>
                <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, deleniti. Nemo, a vitae autem quaerat obcaecati us...</div>

                <div class="btn">
                    <button class="view magicButton2">View</button>
                </div>
                
                <div id="postId"></div>
        </div>
    </a>
    
</div>
    <button class="control-angles right">
        <i class="fas fa-angle-right"></i>
    </button>
</section>
<div class="main-search">
        <input type="text" name="search" id="main-search" placeholder="Search for post...">
        <button class="default-off"><i class="fas fa-search"></i></button>
</div>

<h3 style="margin-left: 50px; margin-bottom: 20px;color:rgb(0, 185, 241)">Recent Posts</h3>
<section class="main-section">

    <div class="recent-post">
        <div class="posts">

        
            <div class="title">How to monetize your blog in 10min</div>
            <div class="author-info">
                <div class="author-img">
                    <img src="/Admin_config/Assets/my-pix.png" alt="author's image">
                </div>
                <div>
                    <div><i class="fas fa-user"></i> <span>Ubong James</span></div>
                    <div><i class="fas fa-calendar"></i> <span>23 July, 2021</span></div>
                </div>
            </div>
            <div class="cover-image">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
            <div class="post-body">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut. Labore pariatur aut odit ipsam vero laudantium cupiditate alias quasi deserunt dignissimos tempora eius molestias inventore, distinctio doloremque suscipit perferendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt,nonLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt, non fuga porro, dicta unde quasi! Unde, iure id!
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut. Labore pariatur aut odit ipsam vero laudantium cupiditate alias quasi deserunt dignissimos tempora eius molestias inventore, distinctio doloremque suscipit perferendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt, fuga porro, dicta unde quasi! Unde, iure...
    
    
            </div>
            <div class="readBtn">
                <button>
                    <span>Continue Reading</span>
                    <i class="fas fa-long-arrow-alt-down"></i>
                </button>
            </div>
    
    </div>
        <div class="posts">

        
            <div class="title">How to monetize your blog in 10min</div>
            <div class="author-info">
                <div class="author-img">
                    <img src="/Admin_config/Assets/my-pix.png" alt="author's image">
                </div>
                <div>
                    <div><i class="fas fa-user"></i> <span>Ubong James</span></div>
                    <div><i class="fas fa-calendar"></i> <span>23 July, 2021</span></div>
                </div>
            </div>
            <div class="cover-image">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
            <div class="post-body">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut. Labore pariatur aut odit ipsam vero laudantium cupiditate alias quasi deserunt dignissimos tempora eius molestias inventore, distinctio doloremque suscipit perferendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt,nonLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt, non fuga porro, dicta unde quasi! Unde, iure id!
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut. Labore pariatur aut odit ipsam vero laudantium cupiditate alias quasi deserunt dignissimos tempora eius molestias inventore, distinctio doloremque suscipit perferendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt, fuga porro, dicta unde quasi! Unde, iure...
    
    
            </div>
            <div class="readBtn">
                <button>
                    <span>Continue Reading</span>
                    <i class="fas fa-long-arrow-alt-down"></i>
                </button>
            </div>
    
    </div>
        <div class="posts">

        
            <div class="title">How to monetize your blog in 10min</div>
            <div class="author-info">
                <div class="author-img">
                    <img src="/Admin_config/Assets/my-pix.png" alt="author's image">
                </div>
                <div>
                    <div><i class="fas fa-user"></i> <span>Ubong James</span></div>
                    <div><i class="fas fa-calendar"></i> <span>23 July, 2021</span></div>
                </div>
            </div>
            <div class="cover-image">
                <img src="/Admin_config/Assets/images (19).jpeg" alt="">
            </div>
            <div class="post-body">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut. Labore pariatur aut odit ipsam vero laudantium cupiditate alias quasi deserunt dignissimos tempora eius molestias inventore, distinctio doloremque suscipit perferendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt,nonLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt, non fuga porro, dicta unde quasi! Unde, iure id!
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut. Labore pariatur aut odit ipsam vero laudantium cupiditate alias quasi deserunt dignissimos tempora eius molestias inventore, distinctio doloremque suscipit perferendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quis dolore commodi adipisci ducimus quas delectus iste nobis, minima nesciunt, fuga porro, dicta unde quasi! Unde, iure...
    
    
            </div>
            <div class="readBtn">
                <button>
                    <span>Continue Reading</span>
                    <i class="fas fa-long-arrow-alt-down"></i>
                </button>
            </div>
    
    </div>

</div>

    <aside>
        <h3>Categories</h3>
        <ul>
            <li><i class="fas fa-caret-right"></i><span>Frontend development</span></li>
            <li><i class="fas fa-caret-right"></i><span>Backend development</span></li>
            <li><i class="fas fa-caret-right"></i><span>Graphics design</span></li>
            <li><i class="fas fa-caret-right"></i><span>Microsoft Packages</span></li>
        </ul>
    </aside>
</section>

<button id="totop" onclick="topFunction()">
<i class="fas fa-angle-double-up"></i>
</button>





<?php
include 'blog.footer.php';
?>