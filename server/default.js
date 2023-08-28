import {products} from './constant/data.js'
import Product from './model/products-schema.js';

const defaultData = async()=>{
    try {
        
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data imported successfully");
    } catch (error) {
        console.log("Error while inserting default data", error.message);

    }
}

export default defaultData;