import './HomeInfoStyles.css'
import HomeData from "./HomeData";
import HomeInfoImg1 from "../../assets/homeInfoImg1.jpg";
import HomeInfoImg2 from "../../assets/homeInfoImg2.jpg";
import HomeInfoImg3 from "../../assets/todo1.jpg";

const HomeInfo = () => {

    return (
        <div className={'home-info'}>
            <h1>Always Choose Correct Path</h1>
            <p>Choosing the correct investment is crucial for long-term financial success. By considering financial goals, risk tolerance, and diversification, new earners can create a solid investment strategy that will help them build wealth and achieve their financial objectives over time.</p>

            <HomeData
                className={'first-info'}
                heading={'Learn to invest'}
                text={'Learning to invest is an essential skill that can help you achieve your long-term financial goals and improve your overall financial well-being. Investing allows to put money to work and earn a return on investment. By choosing the right investments and using a disciplined approach, you can grow your wealth over time and achieve your financial goals.'}
                img1={HomeInfoImg1}
                img2={HomeInfoImg2}
            />

            <HomeData
                className={'first-info-reverse'}
                heading={'Stay Up-to-Date with Market'}
                text={'Staying up-to-date with market developments allows you to recognize potential investment opportunities that match your investment goals and risk tolerance. This enables you to make informed choices about where to allocate your funds, which may result in increased returns.'}
                img1={HomeInfoImg3}
                img2={HomeInfoImg2}
            />
        </div>
    )
}

export default HomeInfo