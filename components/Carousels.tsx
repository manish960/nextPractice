import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const Carousels = () => {
    return (
        <div style={{height:'500'}}>
            <Carousel autoPlay transitionTime={2000} autoFocus infiniteLoop>
                <div>
                    <Image src="/nature1.jpg" layout="fill" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src="/nature1.jpg" layout="fill"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src="/nature1.jpg" height={500} width={1500}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Carousels;