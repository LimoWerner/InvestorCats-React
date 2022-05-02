import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import LinkIconButton from '../components/link-icon-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>InvestorCats</title>
        <meta
          name="description"
          content="Investor Cats\nCute ✅\nCasual ✅\nCunning ✅"
        />
        <meta property="og:title" content="InvestorCats" />
        <meta
          property="og:description"
          content="Investor Cats\nCute ✅\nCasual ✅\nCunning ✅"
        />
      </Helmet>
      <div data-role="Header" className="home-header-container">
        <header className="home-header">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/icc-300h.png"
              className="home-image"
            />
          </div>
          <div className="home-container01"></div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="image"
              src="/playground_assets/discord%20%5B2%5D-200h.png"
              className="home-image01"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link01"
          >
            <img
              alt="image"
              src="/playground_assets/twitter%20%5B2%5D-200h.png"
              className="home-image02"
            />
          </a>
          <a
            href="https://etherscan.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link02"
          >
            <img
              alt="image"
              src="/playground_assets/etherscan-200h.png"
              className="home-image03"
            />
          </a>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link03"
          >
            <img
              alt="image"
              src="/playground_assets/os-200h.png"
              className="home-image04"
            />
          </a>
        </header>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo1">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="home-image05"
              />
            </div>
            <div data-type="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon03">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text">About</span>
            <span className="home-text01">Products</span>
            <span className="home-text02">Pricing</span>
            <span className="home-text03">Blog</span>
            <span className="home-text04">Jobs</span>
            <span className="home-text05">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container02">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04"
              >
                <div className="home-container03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                <div className="home-container04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon07"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <div className="home-container05">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <div className="home-container06">
                  <svg viewBox="0 0 1024 1024" className="home-icon11">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container07">
            <h1 className="home-text06 headline1">
              <span>Investor Cats</span>
              <br></br>
              <span>Cute ✅</span>
              <br></br>
              <span>Casual ✅</span>
              <br></br>
              <span>Cunning ✅</span>
            </h1>
            <a
              href="https://youtu.be/eX2qFMC8cFo"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              <PrimaryButton
                button="PreSale Soon"
                className="home-component"
              ></PrimaryButton>
            </a>
          </div>
          <img
            alt="image"
            src="/playground_assets/10-600h.png"
            className="home-image06"
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="home-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/left.svg"
          className="home-left"
        />
        <img
          alt="image"
          src="/playground_assets/right.svg"
          className="home-right"
        />
      </div>
      <div className="home-features">
        <h2 className="headline2 home-text14">Utility</h2>
        <span className="home-text15">
          <span className="home-text16">
            There are house cats, park cats, parkour cats - the variations are
            countless. Cometh the 21st century, cats have earned PhDs &amp; yolo
            degrees in investment becoming investor cats
          </span>
        </span>
        <div className="home-features1">
          <FeatureCard
            text="Called the classical sappy seals, sup ducks, lazy lions to solana danger valley &amp; cats on creck"
            title="Alpha channel"
          ></FeatureCard>
          <FeatureCard
            text="Information on crypto, investment, futures, options &amp; CFDs shared freely"
            title="Education"
            image_src="/playground_assets/02.svg"
          ></FeatureCard>
          <FeatureCard
            text="Early access get future utility &amp; WL access into upcoming projects"
            title="OG Roles"
            image_src="/playground_assets/03.svg"
          ></FeatureCard>
          <FeatureCard
            text="Weekly contests on hunting for black swan events"
            title="Trades"
            image_src="/playground_assets/04.svg"
          ></FeatureCard>
          <FeatureCard
            text="Of books on investment from Peter Lynch Learn to Earn to Intelligent Investor"
            title="Library"
            image_src="/playground_assets/05.svg"
          ></FeatureCard>
          <FeatureCard
            text="Low Gas, WL enabled"
            title="ERC721A, Merkle Tree"
            image_src="/playground_assets/06.svg"
          ></FeatureCard>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-container08">
          <div className="home-container09">
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className="home-image07"
            />
            <h1 className="home-text17 headline2">Team</h1>
            <span>-------------------</span>
            <div className="home-container10">
              <a
                href="https://www.instagram.com/ruvrie_artzaa/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <TestimonialsCard
                  text="A hooman that ventures the world of arts and aspires to be a great artist from the Philippines🍒"
                  text1="RuvRie_Artzaa"
                  text2="Artist in chief"
                  image_src="/playground_assets/39-300h.png"
                  className="home-component07"
                ></TestimonialsCard>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <TestimonialsCard
                  text="Worked for an advertising firm, now trying to use my skills in the NFTverse"
                  text1="Purrsian"
                  text2="Promo Pussy - well that came out wrong"
                  image_src="/playground_assets/7-300h.png"
                  className="home-component08"
                ></TestimonialsCard>
              </a>
              <a
                href="https://twitter.com/BahamasBro"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <TestimonialsCard
                  text="A crypto bro with a passion for art, tech, NFTs &amp; finance"
                  text1="BahamasBro"
                  text2="Chief Mischief"
                  image_src="/playground_assets/3-300h.png"
                  className="home-component09"
                ></TestimonialsCard>
              </a>
            </div>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <a
                href="https://reddit.com/r/wallstreetbets"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <TestimonialsCard
                  src="/playground_assets/logo-1.svg"
                  text="If Warren Buffett drank too much Vodka. Loves sports, bets &amp; black swans"
                  text1="Pouring Kitty"
                  text2="Options Degenerate"
                  image_src="/playground_assets/40-300h.png"
                  className="home-component10"
                ></TestimonialsCard>
              </a>
            </div>
            <div className="home-container13">
              <a
                href="https://github.com/ralresearcher"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <TestimonialsCard
                  text="Jack of Frontend, Backend, Blockchain. Master of none 🇮🇳"
                  text1="Limo Werner"
                  text2="Dev in Chief"
                  image_src="/playground_assets/2-300h.png"
                  className="home-component11"
                ></TestimonialsCard>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://youtu.be/eX2qFMC8cFo"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link14"
      >
        <PrimaryButton
          button="Roadmap"
          className="home-component12"
        ></PrimaryButton>
      </a>
      <div className="home-feature1">
        <div className="home-container14">
          <img
            alt="image"
            src="/playground_assets/4-600h.png"
            image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
            className="home-image08"
          />
        </div>
        <div className="home-container15">
          <h3 className="headline3">25% sold</h3>
          <span className="home-text20 lead1">
            <br></br>
            <span>Let the trades begin.</span>
            <br></br>
            <span>
              Launch of the alpha channel with daily vettings of upcoming
              projcets, gut feels, calls to flip or hold &amp; discussions
            </span>
          </span>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link15"
          >
            <LinkIconButton
              text="Join Discord for OG Role"
              className="home-component13"
            ></LinkIconButton>
          </a>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container16">
          <h2 className="headline2 home-text25">
            <span className="home-text26">50% sold</span>
          </h2>
          <img
            alt="image"
            src="/playground_assets/42-600w.png"
            className="home-image09"
          />
          <span className="home-text27 lead1">
            <br></br>
            <span>
              Double the buzz with a community wallet initiation of 25% funds to
              be used for upcoming projects &amp; tokenized stocks, CFDs,
              Futures, leveraged trades on meme stocks &amp; some value
              investing as well.
            </span>
            <br></br>
            <span>
              We like to have diet Coke with our 2000 calorie dinner🤪
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/8-1200w.png"
          image_src="/playground_assets/iphonex-1200w.png"
          className="home-image10"
        />
        <h2 className="headline2 home-text32">
          <span className="home-text33">75% sold</span>
        </h2>
        <span className="home-text34 lead1">
          <br></br>
          <span>Time to get serious</span>
          <br></br>
          <span>
            All good things must end but even greater things will begin
          </span>
          <br></br>
          <span>
            To make dough in this space you have to have the conviction to leave
            out 10 calls for 1 good one
          </span>
          <br></br>
          <span>
            This is the era of weekly pdf launches of fundamental analysis.
            We&apos;ll pick stocks like Catflix &amp; Catla &amp; publish our
            price targets &amp; investment theses on those
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            The aim of this exclusive members only DD will be to add value in
            R&amp;D to our HODLers
          </span>
          <br></br>
          <span>
            This is the part where we aim to give back in multiples of the $
            amount, not just the ether amount of what you chose to FOMO in us
          </span>
        </span>
      </div>
      <div className="home-c-t-a">
        <div className="home-container17">
          <div className="home-container18">
            <h2 className="headline2 home-text49">
              <span className="home-text50">100% sold</span>
            </h2>
            <span className="home-text51 lead1">
              <span className="home-text52">
                10% of the funds go to Red Cross
              </span>
            </span>
            <span className="home-text53 subtitle2">
              <span className="home-text54">Roadmap 2.0🚀🚀🚀</span>
            </span>
          </div>
          <div className="home-container19">
            <img
              alt="image"
              src="/playground_assets/41-300w.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="home-image11"
            />
            <img
              alt="image"
              src="/playground_assets/9-300w.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="home-image12"
            />
            <img
              alt="image"
              src="/playground_assets/1-300w.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="home-image13"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
