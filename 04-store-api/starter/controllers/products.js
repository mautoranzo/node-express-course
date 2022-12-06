const Product = require('../models/product')

const getAllProductsStatic = async (req,res) =>{
    const products = await Product.find({price:{$lt:30}})
        .select()
        .sort("price")
        .limit(5)
        .skip(6)
    res.status(200).json({products,nbHits: products.length})
}

const getAllProducts = async (req,res) =>{
    const {featured, company, name, sort, fields, numericFilters} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true'? true:false
    }
    if(company){
        queryObject.company = company 
    }
    if(name){
        queryObject.name = {$regex:name, $options:'i'}
    }
    

    if(numericFilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '<':'$lt',
            '<=':'$lte',
            '=':'$eq'
        }
        const regEx = /\b(>|>=|<|<=|=)\b/g
        let filters = numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)
        const options = ['price','rating']
        filters = filters.split(',').forEach((element) => {
            const [field,operator,value] = element.split('-')
            if(options.includes(field)){
                queryObject[field] = {[operator]: Number(value)}
            }
        });
    }


    // console.log(queryObject);

    let results = Product.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        console.log(sortList);
        results = results.sort(sortList)
    }else{
        results = results.sort('createdAt')
    }

    if(fields){
        const fieldsList =  fields.split(',').join(' ')
        results = results.select(fieldsList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    results = results.skip(limit*(page-1)).limit(limit)
    const products = await results
    res.status(200).json({products,nbHits: products.length})
}

module.exports = { getAllProducts, getAllProductsStatic}