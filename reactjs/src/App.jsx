import './App.css';

function App() {
  return (
    <div>
      <div className='banner'>
        <div className='contact'>
          <div className='email'>
            <img src='/Symbol.png' style={{ marginRight: "12px",width:"15px", height:"11px" , marginTop:"6px" }} />
            <p>www.registerkaro.com</p>
          </div>
          <div className='vertical'></div>
          <div className='phone'>
            <img src='/Symbol (1).png' style={{ marginRight: "12px" ,width:"15px", height:"11px" , marginTop:"6px"}} />
            <p>+918447746183</p>
          </div>
          <div className='vertical'></div>
          <div className='contacts'>
            <img src='/Insta.svg' style={{ marginRight: "15px" }} />
            <img src='/Vector (1).png' style={{ marginRight: "15px" }} />
            <img src='/Vector (2).png' style={{ marginRight: "15px" }} />
            <img src='/Vector (3).png' style={{ marginRight: "15px" }} />
          </div>
        </div>
      </div>

      <div className='navbar'>
        <div className='left'>
          <img src='/Group 1261153022.png' style={{marginLeft:"10px"}} />
        </div>
        <div className='center'>
          <div className='title'>
            <p>Home</p>
            <p>Our Services<img src='public/Icon-Angle.png' style={{marginLeft:"5px"}}/></p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>About us</p>
          </div>
        </div>
        <div className='right'>
          <img alt='search' src='/Vector (5).png' />
          <button>Talk An Expert</button>
        </div>
      </div>

      <div className='home'>
      <div className='name'>
     <div className='rating' style={{display:"flex", gap:"10px"}}>
      <img src='public/Vector (4).png'/>
      <p style={{fontWeight:"500" , fontSize:"18px"}}>Google Rating</p>
      <img src='Img (1).png'/>
     </div>
    <h1>
      Your Trusted partner
      <br />
      for compliance business needs
    </h1>
   <hr style={{width:"8%", height:"3px" ,background:"red", border:"none"}}/>
    <div className='desc'>
      <p>
  An online business compliance platform that helps entrepreneurs and
  <br /> other individuals with various <strong>registration, tax filings,</strong> and other <strong>legal</strong>
  <br/>     <strong>matters</strong>.
     </p>
</div>
    
<div className="options">
  <div className="option">
    <div className="icon-placeholder"></div> {/* Placeholder for icon if needed */}
    <div>
      <p><strong>4.5+</strong></p>
      <p>Customer Rating</p>
    </div>
  </div>

  <div className="option">
    <img src="/SVG.png" alt="Clients Icon" className="icon" />
    <div>
      <p><strong>20,000+</strong></p>
      <p>Clients</p>
    </div>
  </div>

  <div className="option">
    <img src="/SVG (1).png" alt="Financial Stability Icon" className="icon" />
    <div>
      <p><strong>99.8%</strong></p>
      <p>Financial Stability</p>
    </div>
  </div>
</div>


    <div className='submits'>
      <button className="btn-primary">Talk An Expert</button>
      <button className="btn-secondary"></button><p>See how it works</p>
      
    </div>
    </div>

    <div className='list'>
      <div className='button'>
        <button>Annual Compliance</button>
        <button>PayRoll Services</button>
        <button>Company Formation</button>
        <button>Annual Compliance</button>
      </div>
    </div>
  </div>
  <div className='break'>
    <h2>Trusted By Over 100+ Startups and freelance business</h2>
    <img src='Logos.png'/>
  </div>
</div>

  );
}

export default App;
