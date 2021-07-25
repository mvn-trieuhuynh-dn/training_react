import { useParams } from "react-router";

function ProductDetail() {
    const params = useParams();
    return (
        <p>Product ID: {params.id}</p>
    );
}

export default ProductDetail;