import { CgExternal } from "react-icons/cg";
/* eslint-disable */
import React , {useState , useEffect} from 'react';

import { data } from './assets/data2_modified2';


const diffMap = {
    "Easy": "green",
    "Medium": "primary",
    "Hard": "red"
}

const companyMap = {
    "Google": "#4285f4",
    "Amazon": "#FF9900",
    "Microsoft": "#F25022",
    "Facebook": "#3b5998",
    "Apple": "#A2AAAD",
    "Adobe": "#FF0000",
}
function Product() {

    const [product , setData] = useState(data[0]);



    return (
    <>
        <div className='h-[calc(100vh-5rem)] flex flex-col px-10 pt-10 gap-10'>
            <div className="flex gap-4 items-center">
                <h1 className="flex items-center gap-2 text-primary text-8xl font-bold">{`${product.id}.${product.title}`}<span className="hover:text-green cursor-pointer text-white"><CgExternal /></span></h1>
                <h1 className={`tag border-${diffMap[product.difficulty]} text-6xl w-fit h-fit !px-5 !py-3`}>{product.difficulty}</h1>
                <h1 className="text-4xl font-bold">1$</h1>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
                {product.related_topics?.split(',').map((item, index) => (
                    <div key={index} className="tag border-primary text-2xl w-fit">
                        {item}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-5 flex-wrap">
                {product.companies?.split(',').map((item, index) => (
                    <div key={index} className={`tag text-2xl w-fit !border-faceboo`}
                        style={{borderColor:companyMap[item] || "#FEA015"}}>
                        {item.trim()}
                    </div>
                ))}
            </div>
            <button className="text-5xl font-bold px-6 py-4 bg-green rounded-2xl w-fit hover:bg-primary cursor-pointer">Buy Now</button>
        </div>
    </>
    );
}

export default Product;