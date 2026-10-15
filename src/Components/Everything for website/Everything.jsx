import "./Everything.css";

export default function Everything() {
  return (
    <div className="everything">
      <div className="content">
        <p className="dontMiss">
          🔥<span>Don't miss limited-time savings:</span> Savings 20%
        </p>
        <h1>Everything for Your Site to Succeed</h1>
        <div className="getStarted">
          <button>Get Started</button>
          <p>
            Starting at only <span>$4.75/mo*</span>
          </p>
        </div>
      </div>
      <div className="img">
        <img src="../../../public/everythingImage.png" alt="everything" />
      </div>
    </div>
  );
}
