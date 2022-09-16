import "./singlePost.css";
import Sidebar from "../../sidebar/Sidebar";
import photo from "../../post/bookpost.jpg";
console.log(photo);
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <img className="singlePostImg" src={photo} alt="post"></img>
        <div className="singlePostEdit">
          <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i class="singlePostIcon fa-solid fa-trash"></i>
        </div>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostDate">22 February 2022</span>
      </div>
      <p className="singlePostText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium
        vel consequuntur id corrupti blanditiis eligendi! Doloremque,
        repudiandae. Dicta ut architecto officia dolorem optio beatae expedita
        voluptatibus ea ullam possimus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Odio, quis voluptates fuga iure dignissimos illo! Quae
        quod labore similique vitae consequatur ipsam dolore laboriosam at
        repudiandae, praesentium laudantium quis tenetur. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ut, omnis porro veniam excepturi
        minus, velit fugit error officiis doloribus aut, culpa sapiente quae
        officia nesciunt reiciendis? Libero maxime quod a. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Excepturi, molestias adipisci,
        quisquam quaerat maxime quis quibusdam in iusto eum fuga delectus
        consequuntur. Iste praesentium voluptate sint dolore quae recusandae
        vel? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        architecto tempore quis nobis et ad, perferendis eaque maiores excepturi
        ullam commodi deserunt asperiores saepe voluptates amet sequi. Fugiat,
        corrupti neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sed a nulla, libero deleniti soluta obcaecati quaerat exercitationem
        necessitatibus, excepturi amet deserunt quibusdam similique, dicta sequi
        quisquam sunt possimus officiis consequatur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Exercitationem tempore odit quaerat,
        repellat recusandae delectus impedit vero nihil necessitatibus qui quas
        quia voluptates, veniam ex laudantium obcaecati, consectetur cupiditate
        consequatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Corporis laudantium obcaecati, repudiandae a hic nostrum accusantium
        reiciendis, provident accusamus voluptatibus natus fugit quidem
        asperiores eos laborum quibusdam consequatur eveniet ipsam. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Non corporis excepturi
        delectus quaerat officia esse totam commodi voluptatum asperiores. At,
        dolorum. Aut praesentium id voluptatibus nobis in soluta molestias
        inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia nam culpa nobis iure aspernatur minus dolore sit, reprehenderit
        sint impedit laudantium voluptate quidem debitis rerum expedita quod!
        Quo, recusandae eveniet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Odio numquam distinctio natus quos aliquid id nobis
        nesciunt, tempore, similique, iure unde odit iusto delectus vitae magni
        hic quo? Assumenda, sed? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam, amet? Quam cum ducimus reiciendis! Iste
        aliquid, officia aliquam odit doloribus provident rerum maiores
        repellendus pariatur fugiat laboriosam impedit quidem? Eum. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Quod rerum dolores omnis
        eveniet in veritatis officia, voluptas enim dolore libero earum,
        voluptatum dignissimos, labore nesciunt sint inventore dolorum quaerat
        tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        rerum magni sint dolorem in consequatur quaerat error, sequi accusantium
        ab amet, assumenda quam minus harum eos aspernatur recusandae. Optio,
        maxime? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
        ullam maiores ab, minus sit, est quisquam ipsam esse sunt laudantium
        labore porro, perspiciatis inventore vitae atque ipsa veniam et aut.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae
        laboriosam aliquam animi provident! Voluptas blanditiis ratione
        consectetur sint. Aspernatur id perferendis sunt voluptates provident
        totam quidem expedita omnis magni?
      </p>
    </div>
  );
}
