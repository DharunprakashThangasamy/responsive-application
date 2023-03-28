import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { getDocs , collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import Card from './Card'

export default function ProductForm(props) {

    const[productList, setProductList] = useState([])

    const [formSubmitted , setFormSubmit] = React.useState(false)

    const [formData, setFormData] = React.useState(
        {
            productName : "",
            productPrice : "",
            productQty : "",
            productShiped : ""
        }
    )

    const getProducts = async () => {
        try {
            const data = await getDocs(productCollectionRef);
            const fileteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id : doc.id
            }))
            console.log(fileteredData)
            setProductList(fileteredData)
        }catch(err){
            console.error(err)
        }
    }

    const deleteProduct = async (id) => {
        try {
            const product = doc(db , "products",id)
            await deleteDoc(product)
            getProducts()
        }catch(err){
            console.error(err)
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const onsubmit = async(event) => {
        setFormSubmit(true)
        event.preventDefault()
        const [name, value] = event.target
        setFormData( {
            productName : "",
            productPrice : "",
            productQty : "",
            productShiped : ""
        })
        console.log("Form is submitted")
        try{
            await addDoc(productCollectionRef, {...formData})
            getProducts();
        }catch(err){
            console.error(err)
        }
    }

    // DB part 
    
    const productCollectionRef  = collection(db, "products")

    useEffect(() => {
            getProducts();
    }, [])


    return(
        <div className='product-forms'>
            <h1>Enter the details</h1>
            <form  onSubmit={onsubmit} className='product-form'>
                <input  
                    name = "productName"
                    placeholder='ProductName'
                    value = {formData.productName}
                    onChange ={handleChange}
                />
                <input 
                 name = "productPrice"
                 placeholder='productPrice'
                 value = {formData.productPrice}
                 onChange ={handleChange}
                />
                <input 
                  name = "productQty"
                  placeholder='productQty'
                  value = {formData.productQty}
                  onChange ={handleChange}
                />
                <input
                      name = "productShiped"
                      placeholder='productShiped'
                      value = {formData.productShiped}
                      onChange ={handleChange} />

                <input type="submit" value="Submit" />

                {formSubmitted ? <h3>Form Submitted :)</h3> : "Press submit button to submit" }
            </form>

            <div>
               <h1>Products</h1>
               <div className='cards-container'>
                {productList.map((product) => 
                    <Card product = {product} />
                )}
               </div>  
            </div>
        </div>
    )
}