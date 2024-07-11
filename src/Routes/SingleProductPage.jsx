import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function SingleProductPage() {
    const { id } = useParams()
    const [data, setdata] = useState({})

    useEffect(() => {
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            .then((res) => {
                setdata(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (

        <div>
            <h1 style={{marginTop:"30px",marginBottom:"-180px",fontWeight:"bold"}}>Single Product Page</h1>
            <div data-testid="products-container"
                style={{
                    height: "500px",
                    backgroundColor: "white",
                    width: "50%",
                    marginLeft: "25%",
                    marginTop: "200px",
                    borderRadius: "20px",
                    boxShadow: " 0px 2px 5px 5px rgb(206, 147, 39)"
                }}>
                <div>
                    <h3 data-testid="product-brand">{data.brand}</h3>
                </div>
                <div >
                    <img src={data.img} data-testid="product-image" style={{ height: "400px" }} />
                </div>
                <div data-testid="product-category">{data.category}
                </div>

                <div data-testid="product-details">{data.details}
                </div>
                <div data-testid="product-price">{data.price}
                </div>

            </div>
        </div>
    )
}
export default SingleProductPage