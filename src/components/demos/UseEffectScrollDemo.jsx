import React, { useEffect, useState } from "react";

function UseEffectScrollDemo() {
  // Will only happen on the first render.
  const [scroll, setScroll] = useState(window.scrollY);

  function moveToTop() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    // Clean-up function
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  console.log("scroll", scroll);

  return (
    <div>
      {scroll > 500 && (
        <button
          style={{
            position: "fixed",
            right: "50px",
            bottom: "50px",
            padding: "16px",
          }}
          onClick={moveToTop}
        >
          Scroll to Top
        </button>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        porro consequatur dolor non, architecto itaque vero incidunt laboriosam
        perspiciatis officia consequuntur in veniam quo quaerat neque
        voluptatem, blanditiis labore inventore ducimus repellat. Eaque, nemo.
        Reprehenderit beatae officia dolor alias odit doloribus quia modi
        tempore sunt magni labore optio, sed saepe ullam! Illo voluptate cumque
        iste labore aspernatur, vitae aliquid error facere natus doloribus neque
        laudantium expedita fugit nam excepturi quo et fuga a tenetur
        praesentium fugiat accusamus unde aperiam deleniti! Repellat omnis
        accusamus fugiat, libero nostrum odio? Nulla facere deleniti tempora
        suscipit excepturi, cupiditate odio unde reiciendis quas officiis
        inventore ad accusantium consequuntur! Quam hic saepe, repellat tempora
        quaerat voluptatem corporis adipisci, excepturi doloribus obcaecati
        quae, iste quas numquam quasi? Dolores debitis libero iste nesciunt,
        architecto quia! Deserunt placeat laboriosam inventore voluptas, sit aut
        nam eveniet consequuntur cumque expedita earum iste, illum excepturi
        libero obcaecati nisi? Dolorum odio iusto ratione, esse debitis
        asperiores sequi officia a provident! Impedit, modi expedita veritatis
        quas reprehenderit ratione asperiores molestiae suscipit praesentium
        similique corporis nihil odio illum? Est animi tempore ratione inventore
        ipsum! Vitae voluptatem quia deserunt cupiditate architecto? Fugiat,
        suscipit sunt quas eos eum delectus vero nam reprehenderit recusandae
        quos rerum quis facilis neque esse aspernatur ratione voluptas quasi
        reiciendis temporibus beatae molestiae, illum voluptatem eligendi
        corporis? Animi voluptate, reiciendis vel, vitae, voluptatem cumque
        provident illo tenetur sed iste repellat. Voluptatem harum cumque dicta
        nihil. Placeat sunt reprehenderit nemo, tempora et temporibus sint
        laboriosam aut hic eveniet magni voluptate, tempore laborum quis
        doloremque nisi est, iusto aliquam! Optio qui pariatur maxime voluptate
        in cumque, quasi, blanditiis iste reiciendis eaque vero! Perferendis
        consequuntur nobis dolorem sapiente provident hic natus alias reiciendis
        id dolore. Dolor numquam quisquam deserunt ea ducimus minus, excepturi
        culpa accusantium provident quod quo dolores dignissimos? Odio, ducimus
        quo, tempora sit assumenda inventore aliquid hic praesentium tempore
        voluptatibus delectus ab neque iure provident placeat est voluptatum
        dignissimos doloribus, obcaecati ad molestias exercitationem laborum.
        Sapiente hic numquam at atque aliquam cupiditate eum quod minima quos
        maxime, mollitia aperiam similique veritatis dolores tempora fugiat,
        placeat obcaecati iusto laboriosam magnam ipsa illo? Impedit illum
        repudiandae hic debitis aperiam adipisci perspiciatis eos accusantium,
        soluta porro quasi, ab commodi, distinctio ratione molestias. Nesciunt
        possimus eos dolorem vitae iste obcaecati nulla, asperiores quaerat
        soluta animi porro, tenetur quo ut delectus blanditiis illum
        reprehenderit eligendi tempore quasi. Necessitatibus excepturi vel
        vitae. Eligendi earum reiciendis eos tenetur cum quis, beatae sit dolor.
        Autem, explicabo corrupti quae tempora dignissimos deserunt temporibus
        velit expedita cumque eius earum excepturi accusantium. Inventore
        dolorum praesentium ipsam nihil facilis accusantium sed suscipit atque
        porro, temporibus consectetur laboriosam corporis quae enim fuga sequi
        similique dolore repellendus. Obcaecati temporibus a magni esse
        voluptatem quia perferendis exercitationem consectetur, aliquam libero
        repellendus modi dolor rerum animi. Officiis, dolores aperiam.
        Reprehenderit modi facilis rerum, consectetur sunt amet mollitia officia
        ab aspernatur quia provident odit dolorum magnam voluptatibus nam
        repudiandae, numquam qui obcaecati eligendi ex possimus labore beatae!
        Ipsum aliquid veniam provident, dolores similique officiis odit
        doloremque! Blanditiis voluptatum doloribus laudantium officiis.
        Perspiciatis officia minima distinctio eum, reprehenderit iure tempore
        saepe totam eveniet, recusandae, harum vitae eaque? Enim libero voluptas
        fugit beatae molestias quibusdam vitae ex cupiditate aperiam eveniet
        labore unde repellat maxime, nihil necessitatibus eaque error debitis
        expedita minima, soluta et. Dolorem magnam incidunt tempora, veritatis
        libero et soluta porro delectus? Fugit, quas sit officia at asperiores
        illum nobis, modi cum rem aliquam facilis dolor distinctio quibusdam
        quod unde voluptatibus, quis optio accusantium molestiae! Cumque rem
        quam aliquam sint? Odio modi minus tempora beatae distinctio. Incidunt
        magni ipsam pariatur omnis blanditiis harum, sequi alias ipsum dolorem?
        Porro possimus sed placeat quisquam, totam quasi, consequuntur velit ab
        quas facilis harum laudantium cumque vero reprehenderit enim
        exercitationem iure, quia architecto officiis esse natus. Consectetur
        repudiandae obcaecati exercitationem corrupti velit ullam qui. Nostrum
        eos minus exercitationem natus officia numquam temporibus quidem
        sapiente tenetur fugit, molestias voluptatibus dolorum amet aut eum!
        Delectus tempore velit natus accusantium repudiandae commodi magni
        maxime, eos in dolor eveniet excepturi quaerat, aliquid, facere a. Hic
        tenetur nihil earum dolores assumenda nobis quia exercitationem id. Ut,
        suscipit dolorum officiis optio tempore deserunt! Earum ullam ex
        dignissimos laudantium aut cumque blanditiis omnis necessitatibus
        aperiam soluta? Error, repellendus? A tempora rerum quam consectetur
        perferendis minima? Animi magnam sunt dolore fugiat delectus aperiam
        maiores officiis similique saepe quisquam. Dolores sint ea fugiat
        possimus? Vero in vel eveniet dolore, assumenda nihil quos porro illum,
        earum rerum ullam adipisci voluptatibus enim! Pariatur modi ipsum
        officia voluptas alias doloribus magni, consequatur odio in et
        provident, voluptate fugit minus tempore itaque voluptatem quisquam
        error necessitatibus aspernatur mollitia, aliquam assumenda amet? Nihil
        ducimus omnis excepturi quaerat similique repellat qui enim. Ut,
        architecto? Cumque harum vel consectetur dolor ad numquam at illo
        itaque, officia ea incidunt corrupti, sed distinctio. Odit natus,
        aperiam veniam tenetur quasi, est unde libero quia ipsum voluptate,
        dolor at a sequi vitae aliquid quam! Beatae, modi autem debitis aperiam
        inventore dolores eligendi iusto aliquam aspernatur at similique id
        fugit assumenda illum quae quis, quod, quam voluptates nam esse minus.
        Commodi ex, dolore eum libero mollitia reprehenderit modi vero magni
        quos cum optio, numquam repudiandae fugit! Repellat quibusdam asperiores
        aspernatur nemo repudiandae ipsa nobis ratione sunt est repellendus,
        deleniti porro laboriosam architecto nihil doloremque possimus, et ipsam
        saepe aperiam? Cum dolor accusantium facere quo numquam, doloribus
        laudantium blanditiis nihil sed nobis veniam ab rerum ea dolore facilis
        aperiam aliquid neque sequi? Explicabo cupiditate nemo tenetur harum
        debitis facilis, neque iste itaque velit quidem voluptatibus nobis quia
        obcaecati repellat molestias deserunt maiores, laborum voluptate
        reiciendis saepe necessitatibus impedit deleniti! Veniam porro
        necessitatibus vero quos, ullam nobis earum explicabo qui nihil dolorem
        tempora, nisi a sequi esse rerum? Sunt excepturi in odit tempore vitae
        rem nobis blanditiis quod! Commodi tempore, dignissimos odio cum et vero
        qui molestiae iste odit doloribus hic quo magni? Tempore animi, eum a
        vel voluptate quis tenetur ipsum facilis hic ex minima veritatis
        excepturi, impedit pariatur totam odio officia temporibus quo dolorem
        illum maxime aliquid. Unde minima ipsum soluta impedit, dolores facere
        corporis amet voluptatem necessitatibus aperiam alias praesentium in
        optio pariatur non similique maiores. Excepturi sequi accusantium
        mollitia asperiores magnam sapiente voluptatibus, ea quasi impedit
        adipisci, et quibusdam quis nihil ex eos saepe fugit nisi itaque? Hic,
        similique! Quo, ea modi adipisci, minus ipsam, corporis dolorum illum
        nostrum atque quam pariatur soluta aspernatur. Eos omnis quisquam ullam
        nam nobis impedit labore, aliquam est, perferendis quam consequuntur
        ducimus corrupti aspernatur quis magni temporibus consequatur autem sed
        in, placeat recusandae inventore? Rerum nesciunt odit alias impedit
        delectus, asperiores provident eum repellat veniam expedita dolorum in
        vero sequi doloremque eaque optio ab soluta, amet corporis sapiente
        possimus eos commodi laudantium repudiandae. Laudantium, eos doloremque
        quos necessitatibus nesciunt eveniet maxime aut repellat ut voluptate
        fugiat qui, expedita vero modi a magni! Iusto dolores, quas ratione
        veniam molestiae ea voluptas fugiat. Aut blanditiis, autem ipsa magni
        inventore sit recusandae similique velit voluptatibus repellendus quod
        dolorum neque illo suscipit voluptatem laudantium veniam odit quae
        adipisci hic. Quod nobis cum cumque dolorem, vitae explicabo debitis
        illo nam nostrum neque dolor magnam excepturi nihil harum unde accusamus
        nesciunt quaerat consequatur, eius nulla perferendis! Quod excepturi
        totam, nulla vero rem fugit obcaecati quis! Itaque explicabo, natus,
        odio, veniam aut blanditiis possimus sed accusamus incidunt fuga
        consequuntur! In perspiciatis consequatur ullam. Expedita necessitatibus
        distinctio similique aut atque incidunt ratione, veniam qui quo debitis,
        soluta nostrum molestiae excepturi ducimus ut sequi praesentium nobis
        laborum! Ex nam doloremque necessitatibus perferendis, eos incidunt,
        enim culpa illo vel quod alias reprehenderit totam! Eaque in, ut dolorem
        dicta officia odit voluptatem fugit repudiandae voluptatibus et
        consectetur obcaecati consequatur dolores corporis ratione sed
        perspiciatis tempora ad expedita eos accusamus quas unde! Provident non
        eveniet minima animi corporis architecto, perspiciatis reiciendis
        excepturi ut sequi saepe optio numquam quisquam, magni expedita,
        praesentium eligendi! Cumque animi dolor nulla excepturi ullam minima
        eius nihil mollitia quisquam provident recusandae facere aliquid
        nesciunt consectetur, id, quae beatae eaque alias! Adipisci doloribus,
        asperiores necessitatibus aspernatur est quaerat nisi, illo nesciunt
        laudantium consectetur ullam cumque dolorem ipsa. Suscipit quae alias
        impedit ut velit praesentium, quia odit pariatur aliquam perferendis
        commodi dolore dolor numquam inventore vitae obcaecati eaque?
        Laboriosam, possimus. Tempore repellendus eveniet accusantium quidem
        architecto eaque culpa, commodi magnam quam facilis vel quibusdam dicta
        inventore delectus molestias voluptatum ipsum alias consequatur minus
        nobis dolor temporibus! Tempore, eius minima eveniet a itaque fugit
        perferendis, ipsum recusandae eum magni aliquam doloremque corrupti
        rerum! Eligendi praesentium eos repellendus eaque minus dolorem quas
        unde dolor autem ab neque vero consequatur, perspiciatis modi eum nam
        tempora, similique odio nulla accusamus magnam et! Officia id corporis
        deserunt officiis obcaecati tempore veritatis consectetur vel, inventore
        quibusdam, optio repudiandae veniam natus rem enim pariatur iste
        voluptatem dolores quasi cum ad suscipit iure reiciendis! Nihil
        assumenda nisi sequi, odio molestias quidem dolore fugiat veniam fuga
        nulla? Tempora ipsum deserunt amet totam inventore, harum at iure
        voluptate? Accusantium deserunt similique quam nam nisi porro ducimus
        fugiat commodi enim reiciendis. Expedita magnam quos porro eligendi.
        Doloribus odit nobis consequatur nisi rem. Temporibus rem facilis
        distinctio aut ut assumenda numquam doloremque, perspiciatis ea ducimus
        aperiam et veniam atque exercitationem id! Perferendis delectus rerum
        itaque ad quia? Ad deserunt ut nisi voluptatem maiores hic fugit magni
        autem ex iure molestiae soluta qui dolor temporibus deleniti, magnam,
        eaque non consectetur corporis sint quae dolorum! Eum similique quidem
        eligendi, libero voluptatum explicabo quasi perspiciatis doloremque
        aliquam, neque, id modi quos quo! Repudiandae dolores obcaecati hic
        assumenda fuga officiis neque rem quaerat corrupti tenetur aliquam,
        vitae ducimus commodi expedita voluptates nesciunt dolorem maiores dicta
        accusamus! Recusandae ut voluptatibus, reiciendis corporis consequatur
        sed magnam eveniet voluptas excepturi maiores. Vero iure dignissimos
        ipsum officiis quam. Delectus, hic atque, sunt possimus laudantium
        officia at temporibus obcaecati aperiam, veritatis fuga! Magnam animi
        sapiente sunt neque, ullam et nam excepturi, quia eum possimus eos in
        minima assumenda sequi dolor dicta reprehenderit odit facilis inventore
        ratione libero ipsa provident. Sint porro harum ad, veritatis velit
        pariatur, vero quam accusamus quae corporis voluptatem, maiores quasi!
        Temporibus iste eum autem alias odit saepe in unde ex quia nulla tenetur
        assumenda odio voluptatibus ea exercitationem laudantium quae facilis at
        repudiandae, rerum quas illo nobis? Quae facere exercitationem pariatur.
        Tempora dolor aliquam temporibus assumenda voluptates doloremque
        delectus excepturi veritatis iste neque eos ab quam hic, tenetur ullam
        nisi. Porro quo inventore fugit? Ea doloremque quod praesentium
        corporis, perspiciatis fugiat assumenda ratione pariatur. Ipsam saepe
        molestias ex vitae dolorem mollitia voluptatum accusamus architecto nam
        consectetur iste odit magnam assumenda, quis laudantium molestiae
        repellat ducimus harum alias. Ad perspiciatis nobis eaque voluptatum
        earum expedita. Magnam quia, doloremque iste molestiae quisquam aliquid
        soluta, commodi nesciunt, consequuntur minima ad? Commodi recusandae sed
        perspiciatis iste facilis. Voluptates, rem. Libero amet beatae atque
        dolores, assumenda vero et nostrum iusto reprehenderit, harum officia
        nesciunt eveniet sunt fugiat? Blanditiis sed harum suscipit est delectus
        ratione voluptate aperiam cumque ullam fugit eligendi placeat rerum
        mollitia, sapiente a voluptatem exercitationem doloribus odio vero
        praesentium nulla vel! Voluptatem, magni rem eius maiores sit ratione
        corporis facilis. Minus tenetur tempore id veniam, possimus delectus,
        harum expedita numquam nostrum fugiat sapiente exercitationem
        consequatur aliquam doloremque architecto autem maiores, repellat maxime
        commodi temporibus incidunt? Tempore eius nam neque dolore nemo autem
        beatae, adipisci aperiam, magnam nihil quisquam omnis ipsum assumenda!
        Sunt, dicta. Voluptatibus commodi voluptatem corporis fugiat vel.
        Mollitia, ex! Nobis, ad voluptate perferendis eos reprehenderit deleniti
        earum temporibus facere, quasi, libero aperiam ut reiciendis error.
        Nobis ullam reprehenderit, quisquam perspiciatis aliquam praesentium
        commodi cumque. Voluptates iusto cum illum, error atque aspernatur saepe
        totam placeat enim nisi, itaque distinctio odit a quas reiciendis
        quidem. Quaerat rem iusto quidem earum reprehenderit quas voluptatibus
        laboriosam ea aliquid, praesentium eius amet, distinctio ad aspernatur
        maiores error dolorum saepe doloribus tempora, ipsam odio
        exercitationem! Quas, culpa pariatur nihil aspernatur accusamus corrupti
        ad ab dolorum illo corporis nulla distinctio impedit magnam molestiae.
        Eum, pariatur. Libero beatae, repellat necessitatibus eligendi qui
        perspiciatis at animi nobis rem accusantium reiciendis nihil inventore
        sit reprehenderit. Eum unde, inventore consequuntur dolores sequi
        molestiae odit dicta! Incidunt ipsum consequuntur assumenda labore
        excepturi, aperiam dolorem magnam. Odio incidunt quibusdam natus
        laudantium deleniti temporibus, omnis maxime? Modi, ducimus possimus.
        Corporis placeat consectetur pariatur ipsum explicabo accusantium culpa
        sit. Hic vero numquam, illo inventore similique tempore voluptas ipsum.
        Ducimus voluptate vel doloribus, repudiandae quo perferendis, nobis quod
        pariatur asperiores eos at non aperiam tenetur sunt iste beatae error
        eligendi veniam. Quos, voluptatibus odit consequatur quae illum
        perferendis laudantium reiciendis cumque cupiditate laboriosam delectus,
        suscipit corrupti provident, deleniti nesciunt officiis rem a nam
        perspiciatis sit aliquam quasi distinctio commodi adipisci. Dolores,
        doloremque labore consequuntur architecto velit facilis aperiam illum
        suscipit a laborum voluptatibus modi aspernatur! Laboriosam provident
        incidunt ipsam cupiditate mollitia omnis quam, molestiae soluta rem
        nobis ipsa fuga quia architecto velit deleniti dolore deserunt veritatis
        beatae nesciunt! Et, cupiditate asperiores fugit veritatis ex repellat
        eum placeat harum accusamus aut! Maiores obcaecati placeat reiciendis
        quis, mollitia voluptates earum, quasi quisquam cumque omnis qui
        reprehenderit rem repellendus voluptatum sunt natus fugit dolor itaque
        ad consequatur deserunt, autem unde! Libero sequi accusamus quaerat,
        corrupti numquam officia dolore earum nulla! Blanditiis provident sed
        saepe molestias architecto. Quaerat quas nam eveniet architecto,
        corporis voluptatum consequuntur adipisci ut! Amet assumenda accusamus,
        nihil possimus minima aut. Modi, dolor reiciendis? Architecto ex eos,
        perferendis labore delectus doloribus quo, soluta ratione excepturi
        nesciunt blanditiis sint suscipit illo cumque dolore quisquam earum,
        odio velit repellat ad. Modi id eveniet quaerat labore laboriosam
        nesciunt delectus autem? Hic aliquid dicta veniam animi sapiente dolorem
        sit aut, iste culpa inventore vitae? Vero aut dolorem rerum molestiae
        saepe amet sed illum temporibus, adipisci quam tempore ullam quia minima
        maiores non quasi. Nisi earum nesciunt autem ducimus explicabo rerum
        dolores aspernatur error sit, fuga obcaecati harum quidem! Error
        exercitationem nostrum a accusamus officiis ipsam temporibus dolorem
        excepturi? Quia asperiores corporis unde accusamus aut perspiciatis
        iusto harum, dolore mollitia ipsum eum quo, voluptates aliquid fugiat
        dolores ipsam explicabo laboriosam veritatis voluptatum est! Error
        praesentium sint maiores eos possimus fuga necessitatibus illum, hic vel
        nihil temporibus culpa fugiat eligendi ratione velit soluta
        reprehenderit at natus odit? Suscipit ad cupiditate beatae, explicabo
        dolore eius saepe consectetur illo earum, voluptatum possimus doloribus
        fugit debitis culpa ea! Voluptates odio voluptate est quae eveniet
        officia ex. Deleniti molestias fugit error alias voluptatum, in
        voluptatem natus earum deserunt fuga, ipsa corrupti, maiores harum
        explicabo? Vel, quaerat eveniet? Distinctio veniam enim earum quae
        minima ipsa, accusantium ut ipsam alias odio corporis, voluptas aliquam
        nesciunt! Consectetur, eligendi repellat mollitia beatae amet neque
        distinctio deleniti ab modi voluptates? Illo facere dolore, iusto sint
        sed animi pariatur, distinctio incidunt excepturi optio laudantium
        nostrum accusantium dicta consectetur dolorem eaque fugit maxime quae
        facilis quisquam. Vitae animi iusto quos sint quae minus magni fugit
        possimus laboriosam repudiandae perspiciatis at nihil vero obcaecati
        unde assumenda officiis incidunt nostrum dolor voluptatum et molestias,
        eos inventore? Veniam quibusdam incidunt ad in soluta aperiam numquam
        tempora! Ab, quibusdam! Quos a asperiores neque, laboriosam similique
        cumque quaerat repellat deleniti veritatis officiis maxime, ab explicabo
        expedita. Impedit doloribus repellendus dignissimos doloremque aliquid
        amet dolorem illo deserunt eum sunt asperiores vero tempore
        necessitatibus, inventore dolores voluptates laborum?
      </p>
    </div>
  );
}

export default UseEffectScrollDemo;
