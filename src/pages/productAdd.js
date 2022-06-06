
import { createProduct } from "../api/product";
const ProductsAdd = {
    render: () =>{
        return(
       ` <div>
            <form>
                <div>
                    <label>Tên </label>
                    <input class="form-control" id='name'>
                </div>
                <div>
                    <label>Giá</label>
                    <input class="form-control"  id='price'>
                </div>
                <div>
                    <label>Mô tả</label>
                    <input class="form-control" id='description'>
                </div>
                <div>
                <label>Trạng Thái</label>
                <br/>
                <input type="radio" value="0" name="status" id='abc'/> Ẩn <br/>
                <input type="radio" value="1" name="status" id='abc'/> Hiện <br/>
            </div>
                <div>
                    <button type="button" class="btn btn-success" id="btn">Tạo mới</button>
                </div>
            </form>
        </div>`
    )
    },
    afterRender: ()  => {
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const formartNumber = new Intl.NumberFormat("de-GB", {
                style: 'currency',
                currency: 'VND'
            }).format(price)
            const description = document.querySelector('#description').value;
            const radioButtons = document.querySelectorAll('input[name="status"]');
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
            //console.log(selectedSize);
            const submitData = {
                name: name,
                price: formartNumber,
                description: description,
                status: selectedSize,
               
            };
            await createProduct(submitData);
            //console.log(submitData);
              window.location.replace('/products');

        });
    }
}
export default ProductsAdd;