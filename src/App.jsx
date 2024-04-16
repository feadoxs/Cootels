import "./App.css";
import logo from "./assets/Cootels.svg";
import rightImage1 from "./assets/right-image1.png";
import rightImage2 from "./assets/right-image2.png";
import rightImage3 from "./assets/right-image3.png";
import secondSectionImg from "./assets/second-section-image.svg";
import thirdSectionImg1 from "./assets/third-section-img1.svg";
import thirdSectionImg2 from "./assets/third-section-img2.svg";
import card1 from "./assets/fourth-section-card1.svg";
import card2 from "./assets/fourth-section-card2.svg";
import card3 from "./assets/fourth-section-card3.svg";
import circle from "./assets/circle.svg";
import redCircle from "./assets/red-circle.svg";
import avatar from "./assets/avatar.svg";

function App() {
  return (
    <>
      <div className="header">
        <div className="div-container container">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Reservation</a>
            </li>
            <li>
              <a href="#">Contacs</a>
            </li>
          </ul>
          <div>
            <button className="get">Get Started</button>
          </div>
        </div>
      </div>
      {/* первая секция */}
      <section className="first-section">
        <div className="first-container container">
          {/* Левая часть */}
          <div className="first-container-left-wrap">
            <div className="item-box">
              <h1 className="left-title">
                Nature, Warmth, and Beauty in One Space
              </h1>
              <p className="left-text">
                One place to release all the stress, bring back happines, and
                get back to nature. We provide the best room and nature for you.
                Come visit us anytime you want.
              </p>
              <button className="left-btn">Reservation</button>
            </div>
          </div>

          {/* Правая часть */}
          <div className="first-container-right-wrap">
            <div className="first-container-right-wrap-box">
              <img
                className="first-container-right-image"
                src={rightImage1}
                alt=""
              />
              <img
                className="first-container-right-image right-image2"
                src={rightImage2}
                alt=""
              />
              <img
                className="first-container-right-image"
                src={rightImage3}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Вторая секция */}
      <section className="second-section">
        <div className="second-container container">
          {/* левая часть */}
          <div className="second-section-left-wrap">
            <img src={secondSectionImg} alt="" />
          </div>

          {/* Правая часть */}
          <div className="second-section-right-wrap">
            <h1>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
            <p>
              Our Cootage Hotel is an intimate hideway concieved for dicerning
              travelers. It faces directly the unique and spectacular panorama
              of the Hallerbos Jungle. <br /> <br />
              Cootels extends along a private, quiet, and beautiful nature. Stay
              away from crowd and enjoy the cozy and beauty with us.
            </p>
            <button className="left-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Третья секция */}
      <section className="third-section">
        <div className="third-container container">
          {/* Первая коробка */}
          <div className="third-section-first-box">
            {/* Левая часть */}
            <div className="first-box-left-wrap">
              <div>
                <h1>Cabin Activities</h1>
                <p>
                  Don’t worry to get bored easily in our cabin. We have so many
                  cabin activities for you to do it alone or with group. Maybe
                  this is the best chance for you to make new friends or even a
                  lover.
                </p>
              </div>
            </div>
            {/* Правая часть */}
            <div className="first-box-right-wrap">
              <img src={thirdSectionImg1} alt="" />
            </div>
          </div>

          {/* Вторая коробка */}
          <div className="third-section-second-box">
            {/* Левая часть */}
            <div className="second-box-left-wrap">
              <img src={thirdSectionImg2} alt="" />
            </div>

            {/* Правая часть */}
            <div className="second-box-right-wrap">
              <div>
                <h1>100% Organic Food</h1>
                <p className="left-text">
                  We served 100% organic, low process and delicious food. We
                  allow our guest to have breakfast or dinner request.What ever
                  made your taste buds happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Четвёртая секция */}
      <section className="fourth-section">
        <div className="fourth-container container">
          {/* Верхняя часть */}
          <div className="fourth-section-top-wrap">
            <h1>Many Rooms to Choose</h1>
            <p className="left-text">
              There is a room for every needs. We have room for individuals
              until family size, we also have a cabin for more private
              experience
            </p>
            <button className="left-btn">Explore more</button>
          </div>

          {/* Коробка */}
          <div className="fourth-section-box">
            {/* Первая карточка */}
            <div className="fourth-section-card">
              <img src={card1} alt="" />
              <h2>Single Room</h2>
              <p>
                Best for a brave lone wolf who need comfort and quiet quality
                time, but you still have a chance to meet others.
              </p>
              <button>Learn more ></button>
            </div>
            {/* Вторая карточка */}
            <div className="fourth-section-card">
              <img src={card2} alt="" />
              <h2>Single Room</h2>
              <p>
                Best for a brave lone wolf who need comfort and quiet quality
                time, but you still have a chance to meet others.
              </p>
              <button>Learn more ></button>
            </div>
            {/* Третья карточка */}
            <div className="fourth-section-card">
              <img src={card3} alt="" />
              <h2>Single Room</h2>
              <p>
                Best for a brave lone wolf who need comfort and quiet quality
                time, but you still have a chance to meet others.
              </p>
              <button>Learn more ></button>
            </div>
          </div>
        </div>
      </section>

      {/* Пятая секция */}
      <section className="five-section">
        <div className="five-container container">
          {/* Левая часть */}
          <div className="five-container-left-wrap">
            <p className="five-text">Start your journey!</p>
            <h1 className="title">How to Get My Room?</h1>
            <p className="text">
              You can contact us by phone or email us. Easily tap the contact
              button below and it will take you to our contact point
            </p>
            <button className="left-btn five-btn">Contact us</button>{" "}
            <button className="left-btn white-btn">Explore more room</button>
          </div>

          {/* Правая часть */}
          <div className="five-container-right-wrap">
            <div>
              <div className="list">
                <p>1. Choose a room and date</p>
                <img src={circle} lt="circle" />
              </div>
              <div className="list long-list">
                <div>
                  <p className="second-list-title">1. Choose a room and date</p>
                  <p id="list-text">
                    Contact us via phone or email, ask for availability of you
                    choice of room. We might offer you something exciting.
                  </p>
                </div>
                <img src={circle} lt="circle" />
              </div>
              <div className="list">
                <p>1. Choose a room and date</p>
                <img src={circle} lt="circle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Шестая секция */}
      <section className="six-section">
        <div className="six-container container">
          <div className="six-container-box">
            <h1 className="title">Hear From Our Happy Customers</h1>
            <img src={avatar} alt="" className="avatar" />
            <p className="text">
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much activity even with your famility.
              Worth every penny! you should come and see for your self. 5 out of
              5! the waffle is great!”
            </p>
            <p className="name">Kirana Dunham</p>
          </div>
        </div>
      </section>

      {/* Футер */}
      <div className="footer">
        <div className="footer-section-1">
          <h1>Cootels</h1>
          <p className="Copyright">
            Your Best Private Hideway From Crowd. Back to Nature.
          </p>
        </div>
        <div className="footer-section-2">
          <div className="poradoc-com">
            <ul>
              <h2 class="company">
                <b>Rooms</b>
              </h2>
              <li className="item">Single Room</li>
              <li className="item">Double Room</li>
              <li className="item">Cabin</li>
              <li className="item">Custom Room</li>
            </ul>
          </div>

          <div className="poradoc-com">
            <ul>
              <h2 className="company">
                <b>Reservation</b>
              </h2>
              <li className="item">See the Steps</li>
              <li className="item">Best Time</li>
            </ul>
          </div>

          <div className="poradoc-com">
            <ul>
              <h2 className="company">
                <b>Contact</b>
              </h2>
              <li class="item">Our Number</li>
              <li class="item">Our Email</li>
              <li class="item">Our Location</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
