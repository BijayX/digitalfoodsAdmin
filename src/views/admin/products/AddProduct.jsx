import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBox, faFileUpload,faShoppingBag,faClipboard } from '@fortawesome/free-solid-svg-icons';
import { STATUSES } from "globals/misc/statuses"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProduct } from "store/productsSlice"

const AddProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {status} = useSelector((state)=>state.products)
    const {register,handleSubmit,formState} = useForm()
    const handleProduct = (data) =>{
        data = {...data,productImage : data.productImage[0]}
        console.log(data)
       dispatch(addProduct(data))
       if(status == STATUSES.SUCCESS){
         navigate("/admin/products")
       }
    }
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden  ">
      <div className=" bg-white w-17/12 lg:w-9/12 md:6/12 shadow-3xl " style={{marginTop : '-0px' }}>
   
        <form className="p-3 md:p-5 " onSubmit={handleSubmit((data)=>{
    handleProduct(data)
 })} noValidate >
          <div className="flex items-center mb-6 text-lg md:mb-8">
            
           <FontAwesomeIcon icon={faShoppingBag} className="absolute ml-3" />
            <input type="text" name="username" id="username" className="w-full  pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productName" {...register("productName",{required : "productName is required"})} />
            <p>{formState.errors.productName && formState.errors.productName.message}</p>
          </div>
          <div className="flex items-center mb-6 text-lg md:mb-8">
          <FontAwesomeIcon icon={faClipboard} className="absolute ml-3" />
            <textarea type="productDescription" name="productDescription" id="productDescription" className="w-full py-2 pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productDescription" {...register("productDescription",{required : "productDescription is required"})}  rows={4}> </textarea>
          </div>
        <div style={{display:'flex',justifyContent : 'space-between'}}>
        <div className="flex items-center mb-6 text-lg md:mb-8">
        <FontAwesomeIcon icon={faDollarSign} className="absolute ml-3" />
            <input type="number" name="productPrice" id="productPrice" className="w-full  pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productPrice" {...register("productPrice",{required : "productPrice is required"})} />
            <p>{formState.errors.productPrice && formState.errors.productPrice.message}</p>

          </div>
          <div className="flex items-center mb-6 text-lg md:mb-8">
          <FontAwesomeIcon icon={faBox} className="absolute ml-3" />
            <input type="number" name="productStockQty" id="productStockQty" className="w-full  pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productStockQty" {...register("productStockQty",{required : "productQty is required"})} />
            <p>{formState.errors.productStockQty && formState.errors.productStockQty.message}</p>

          </div>
          <div className="flex items-center mb-6 text-lg md:mb-8">
          <FontAwesomeIcon icon={faFileUpload} className="absolute ml-3" />
      <input type="file" name="productImage" id="productImage" className="w-auto  pl-12 bg-gray-200 md:py-2 focus:outline-none" placeholder="productImage" {...register("productImage",{required : "productImage is required"})}  />
      <p>{formState.errors.productImage && formState.errors.productImage.message}</p>

    </div>
        </div>
        <div style={{marginBottom:"20px"}}>
           <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select product Status</label>
            <select id="countries" class="bg-gray-50 bproduct bproduct-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:bproduct-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:bproduct-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bproduct-blue-500" {...register("productStatus",{required : "productStatus is required"})}  >
            
            {/* <option value={filteredproduct?.productStatus}>{filteredproduct?.productStatus}</option> */}
            <option value="available">available</option>
            <option value="unavailable">unavailable</option>
      
            </select>
            <p>{formState.errors.productStatus && formState.errors.productStatus.message}</p>
           </div>
          <button className="w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">AddProduct</button>
        </form>
      </div>
     </div>
  
  )
}

export default AddProduct