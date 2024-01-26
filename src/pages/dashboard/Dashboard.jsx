import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";

function Dashboard() {
  const { setTitle } = useAppContext();

  useLayoutEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);

  return (
    <motion.section
      className="dashboard"
      key="dashboard"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla id sit
        voluptatem nostrum libero consequuntur natus corporis, aspernatur,
        officia tempora, amet facilis harum doloremque! Voluptate neque,
        voluptatum, iste voluptates sunt, alias consequuntur iure at veritatis
        vero deleniti corrupti libero facere aliquam tempora aut. Alias impedit
        dolorem voluptate dolores quas tempore totam similique eum obcaecati,
        nisi natus quae reiciendis eos inventore saepe esse iure excepturi
        quibusdam suscipit ex est non maiores, ipsum explicabo! Doloremque
        reprehenderit rerum ea dolorum porro ipsum consequatur! Nam ratione
        accusantium optio necessitatibus. Maxime dolorem, tempore quod magni
        obcaecati quidem debitis laborum! Provident, atque at. Sed aspernatur
        error suscipit illum, vitae perspiciatis eius aliquam autem magnam totam
        tempora harum perferendis enim id qui libero atque recusandae
        consequuntur rerum neque similique? Quas iste fugit adipisci architecto
        illo veritatis eos dolorum tempora repellendus et quae saepe neque enim
        veniam, qui nulla molestiae laudantium porro placeat illum harum quo
        rerum ea velit. Adipisci quia esse amet perferendis distinctio atque
        veritatis maxime in facere neque quis provident, nam excepturi aperiam
        officiis suscipit ad, totam iste corporis, repellendus sit rerum
        repudiandae? Vel nulla natus libero eligendi ullam minima praesentium
        molestiae provident veritatis sequi similique ea dignissimos placeat
        totam cupiditate quos fugiat saepe sit debitis laudantium, assumenda
        ducimus delectus. Cum labore nisi commodi delectus, pariatur doloremque?
        Aspernatur, quis molestiae fugiat maiores consectetur sit debitis!
        Sapiente, commodi vel aperiam neque iusto repellat officiis animi
        assumenda quisquam labore tempore natus, aut accusantium. Voluptas culpa
        nemo iusto, alias voluptatibus consequuntur harum a tempora animi quam
        in cupiditate iste dolor vitae quae consectetur minima atque quod
        consequatur debitis? Fuga, itaque molestias illum sint omnis doloribus
        cupiditate, recusandae doloremque hic sunt autem. Facere nesciunt nemo,
        maiores ipsam reprehenderit enim officiis sit obcaecati blanditiis unde
        eaque nulla officia adipisci, omnis, esse animi doloribus ullam vitae.
        Quam accusantium est tenetur unde reiciendis harum doloremque aperiam
        praesentium dolores blanditiis! Facilis possimus minus veniam rerum
        maxime iusto necessitatibus! Delectus enim sint voluptates, vel pariatur
        adipisci, eveniet natus repudiandae deleniti officia tempore dolores
        distinctio dolorem optio iste labore laboriosam aperiam dicta explicabo
        tenetur, ad ullam? Itaque dolorem aut recusandae, quam hic nesciunt,
        officia praesentium culpa quos ducimus enim quis eius corrupti
        voluptatem quisquam asperiores eligendi ipsum architecto nam labore.
        Velit, dignissimos nobis corrupti iure ullam ut deleniti odio dolorum
        tenetur, optio harum alias, cupiditate debitis? Delectus iste
        exercitationem facere alias velit minus dolores totam? Explicabo, eum
        voluptatibus molestias minima sunt perferendis? Vel, minus maxime
        suscipit eligendi enim ex reprehenderit corporis eius, consequuntur
        nobis cum quos eveniet odit eos, iste id delectus nam ad. Numquam
        quisquam eaque aspernatur? Expedita repellat eligendi dolorum, molestias
        incidunt hic eveniet velit, aliquid perspiciatis at, distinctio tempore
        odit ut. Similique obcaecati culpa natus eum facilis minus quasi ad
        laboriosam impedit repellendus vitae, ea dolores doloremque explicabo
        totam aliquid hic repellat aspernatur fuga magni? Laborum itaque
        accusamus et ipsa id odio, voluptatem deleniti molestias quidem natus
        incidunt odit esse sed beatae cupiditate repudiandae repellendus
        exercitationem non? Praesentium delectus sit aut nam a, ducimus
        repellat. Quae voluptas sit, ea eligendi, repellat rem atque similique
        quo excepturi quam reiciendis inventore voluptatibus ipsum labore velit
        perferendis at iusto nobis. Itaque eveniet, error at quia animi nisi
        qui. Voluptatibus error voluptate exercitationem amet nobis, optio non,
        repudiandae laboriosam quam porro illo dolorem perspiciatis est quaerat,
        voluptates ex quas beatae. Exercitationem dolores sunt, corrupti,
        eveniet adipisci aspernatur eos deleniti nemo quidem hic omnis facere
        minima quisquam? Dolorum perspiciatis qui voluptas odit nisi consectetur
        nihil. Laborum natus veniam suscipit voluptatum unde amet in, explicabo,
        praesentium harum laboriosam ad dolores qui, ducimus cupiditate
        accusamus sit illo reprehenderit id tempora eum nisi! Illo, doloribus
        est minima ipsum libero voluptas, fugit dignissimos labore veniam
        provident, minus non numquam nisi eveniet asperiores natus facere?
        Explicabo voluptatum corrupti dicta eum pariatur! Sit a autem nemo
        tenetur odio, ab odit fuga corrupti optio veritatis molestiae amet.
        Laudantium nihil error consectetur nemo! Asperiores eveniet laudantium
        maiores blanditiis earum deleniti reiciendis at explicabo. Deserunt,
        voluptates minima illo fugit temporibus reiciendis placeat recusandae
        ipsam labore facere necessitatibus in vel quos ea dolorum eligendi iusto
        cum doloribus enim doloremque molestiae? Modi nihil minus ab laboriosam
        ipsam expedita voluptate deleniti voluptatem culpa id repudiandae odio
        sapiente, reiciendis a porro facere aspernatur quas asperiores optio ad
        architecto quibusdam nesciunt. Eligendi omnis distinctio aspernatur
        delectus modi provident. Porro doloremque quae nulla quidem quod quos
        possimus aspernatur hic in ratione repellat sequi saepe, minus, illum
        incidunt alias voluptas, deleniti dicta deserunt doloribus maiores
        pariatur. Odio nemo placeat est perferendis cupiditate quas maiores,
        earum cumque similique sapiente dignissimos, doloremque nulla. Odit
        ullam alias consequatur itaque, maiores illum! Beatae dolore, aut
        numquam quae mollitia deleniti, unde voluptate omnis amet, officiis
        veniam temporibus doloribus maiores odio voluptatibus eligendi repellat
        atque similique tenetur cupiditate quisquam! Eveniet quis nisi aut
        facere voluptatem error mollitia quos dolore assumenda eligendi libero
        iste modi id ullam consequuntur magni, repudiandae quisquam, nobis illum
        ducimus reprehenderit commodi officiis. Aperiam voluptatem reprehenderit
        impedit consectetur tempora aspernatur sunt enim iste harum, blanditiis
        nihil recusandae nemo cumque minus, exercitationem officia. Tempore hic
        provident dignissimos deserunt, debitis tempora fugiat architecto
        corporis, saepe aliquid repellendus quam? Facilis nesciunt temporibus
        dolorum possimus saepe necessitatibus quod dolorem repellendus,
        consectetur libero eveniet eum voluptas placeat eos tenetur numquam
        consequuntur sunt, dolores quam tempora quas. Quia natus dicta dolores
        odio ab ducimus officia, non nostrum maxime ullam dolorem maiores
        pariatur excepturi distinctio facilis. Consectetur, doloribus at odio
        voluptates saepe dolore veniam iusto suscipit nisi ratione, impedit
        praesentium aliquam sapiente facilis facere optio vero? Itaque nemo
        tempore blanditiis sed aut quod totam dolor quos expedita fugit adipisci
        ratione velit deserunt ea quis asperiores, cumque necessitatibus
        nostrum! Odit magni eum sed cupiditate perferendis repudiandae!
        Reiciendis, at ipsam. Animi, mollitia rerum eligendi, vero cum similique
        voluptas libero inventore deserunt, quas quisquam? Temporibus amet enim
        at quam, doloribus non reprehenderit. Velit qui minima minus error
        dignissimos dolor, est facere quia laboriosam atque accusamus quis ea
        adipisci mollitia dolorum repellendus, hic voluptatem provident tenetur
        corrupti sint odio culpa. Nulla ut eligendi reiciendis vel. Odit
        veritatis repudiandae molestias perferendis similique aliquid soluta
        tempore voluptatem a quidem!
      </p>
    </motion.section>
  );
}

export default Dashboard;
