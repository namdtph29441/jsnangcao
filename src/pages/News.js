import TinTuc from "./news-data";
const News = {
    render: () =>
    `<div class="row">
        ${TinTuc.map((tin) => (
        `<div class="col-lg-4">
        <h2> ${tin.title}</h2>
        <p> ${tin.content}</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p> 
        </div> `
        )).join('')
    }  
    </div>`,

    // render: function () {
    //     let string = '<div>';

    //     for(let i = 0; i < tintuc.length; i++) {
    //         string += '<div>';
    //         string += tintuc[i].content;
    //         string += '</div>';
    //     }

    //     string += '</div>';

    //     return string;
    // }
    };
    export default News;