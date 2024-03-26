import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

function Home() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("called");
      setScroll(window.scrollY);
    });
  }, []);

  console.log(scroll);

  return (
    <div>
      <h1>Scroll Trigger</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        neque unde, sequi deleniti facere dolorum ea, tempora nesciunt iure nemo
        consectetur porro voluptatibus quos quia ut in. Sed totam magni
        temporibus ullam dignissimos delectus quibusdam nulla earum odio, vitae
        corrupti vero qui accusamus minus, fugiat sunt quis porro fugit a
        laudantium quae. Expedita quo perspiciatis rem quos consequuntur
        distinctio deleniti corporis esse, ab saepe nulla ad repudiandae
        suscipit adipisci facere quis aliquid ullam repellendus. Nostrum ratione
        molestiae beatae odio perferendis magnam placeat totam ea quos
        voluptates quaerat in, alias rerum fugit ipsa provident autem! Incidunt
        illum perferendis magnam aliquam cumque laborum, nostrum quia dicta.
        Voluptas inventore adipisci sint commodi cumque rerum error modi labore
        voluptate ut suscipit rem voluptatibus ex atque sit blanditiis, autem
        beatae fuga deserunt nesciunt? Iusto maiores ipsum eius temporibus, sunt
        voluptas repudiandae, sed sit quae soluta autem minus explicabo modi!
        Tempora dolores vero ipsam quia, deleniti blanditiis ipsum assumenda?
        Voluptates neque vel porro, eligendi harum, placeat id a ex perspiciatis
        rem dolorum! Omnis labore quidem dolore laborum autem recusandae.
        Corporis cumque sequi voluptatum aut, quidem veniam assumenda sapiente
        officia necessitatibus illo quae voluptate excepturi in. Odit, dolor.
        Blanditiis repellendus architecto consequatur officiis facilis
        excepturi, eum ullam, neque, fugiat voluptates tempora et? Vitae ab
        ullam nobis alias distinctio rerum beatae facilis quidem dignissimos
        deleniti, ipsa, minus quisquam atque nesciunt quasi quis corporis quas
        corrupti inventore voluptatem rem. Earum iure vel laboriosam harum esse
        aut debitis distinctio officiis nemo. Architecto nesciunt molestiae
        maiores reprehenderit ratione officia nam numquam corporis, dolores
        dolore ipsam rerum vel magni? Hic odit amet atque in architecto impedit
        quod neque nisi magni, sunt pariatur dolore adipisci corporis veniam
        nemo quae maxime itaque dicta suscipit quia sit? Ad, porro soluta
        voluptatibus iste officiis laborum magnam, eaque rerum nobis excepturi
        perferendis corrupti. Magni facere ipsam libero esse consequuntur, vel
        deserunt blanditiis ex dolore! Iste eveniet impedit commodi quia eum
        enim optio rem ducimus quaerat harum similique dolorem ea dolore nobis
        doloremque natus vel exercitationem expedita, itaque architecto
        laboriosam non? Error harum atque totam debitis minima ullam vero, quas
        quia qui, sequi nulla officia numquam voluptates et. Veniam vitae nobis
        voluptatibus quae repellendus totam odit id nisi repudiandae, provident
        minima maiores ipsum deleniti explicabo esse asperiores itaque aut hic
        reprehenderit modi sequi laboriosam blanditiis in! Quas rerum laborum
        unde iste labore, quisquam numquam vero distinctio cum blanditiis
        aperiam, consequuntur hic excepturi animi illo alias! Nisi veniam quae
        facilis delectus voluptas sint architecto ea deleniti mollitia eos? Quod
        ipsum corrupti blanditiis dolor eveniet facilis necessitatibus molestias
        adipisci! Aliquid aut suscipit corrupti iure excepturi repellat dolorem
        nemo optio, dolore accusantium cumque in soluta officiis ipsum
        dignissimos sed, eveniet qui ullam aspernatur quos aperiam asperiores?
        Blanditiis corrupti molestias vero tempore eveniet maiores, assumenda
        voluptates accusantium illo quod laborum, ipsa fugit a ea non soluta?
        Laborum veniam molestiae, excepturi assumenda reiciendis a tenetur.
        Totam, architecto tenetur laudantium, tempore incidunt nobis vitae autem
        fugit voluptas, harum itaque. Aspernatur, doloribus natus? Dignissimos,
        culpa veritatis? Itaque iusto maiores quidem consequuntur incidunt
        tempora voluptatum, distinctio molestias obcaecati quisquam odit quam
        nobis exercitationem nulla, tempore magni laudantium vel perspiciatis.
        Illum sapiente minima delectus nostrum recusandae qui vitae nesciunt
        asperiores dolorem natus repellendus quasi animi illo odio impedit
        provident nulla sed aspernatur error quidem aut, voluptates adipisci
        commodi. Id cum facere, modi rem suscipit in eum a facilis amet labore
        saepe? Ipsam pariatur sed non molestiae vero exercitationem, sit sint
        quam ex natus quibusdam rerum fugit voluptatem quasi accusantium
        facilis, vel dolorem adipisci perspiciatis distinctio autem. Repudiandae
        dolor in harum at natus consectetur, nemo corporis numquam odio totam
        facilis inventore reiciendis quos eligendi quis qui magnam quas debitis
        voluptatum aspernatur, tempore optio fuga sed et. Fugit molestias
        eveniet, deleniti earum dolorem expedita praesentium. Illo iusto, dolor
        sunt harum quos nostrum laboriosam omnis delectus aliquam velit dicta
        accusantium commodi incidunt deserunt provident perferendis minus
        perspiciatis cupiditate! A, possimus soluta? Mollitia animi deserunt
        placeat sint blanditiis vel voluptatum veritatis adipisci eligendi aut
        atque voluptate culpa ab tempore iste magnam in, error vero minus
        doloremque impedit, fugit quo voluptas! Obcaecati tempora qui, provident
        corporis laborum nihil, minus a vitae iure officia error voluptatum
        alias rem nostrum exercitationem beatae! Laboriosam aliquid repudiandae
        inventore consequatur officia provident ad, ipsa, ab rem mollitia iusto
        fuga tempore deleniti vel perspiciatis delectus culpa itaque? Animi
        voluptate nemo maiores itaque dolor quia molestias quas enim. Inventore
        assumenda fuga aliquid magni vero. Veniam, rem? Velit animi odit alias
        odio pariatur fugiat tempore, ipsam tenetur nobis voluptas error, eaque
        repellendus. Pariatur, quasi provident animi non a ut velit ipsa quae
        veniam tempore, at deserunt odit sit debitis. Corporis vero officia
        suscipit est fugit atque, eius amet reprehenderit porro exercitationem
        magni distinctio ratione possimus nisi totam quae quaerat quo deleniti
        at quis tempore animi ipsam sunt! Quisquam illum iusto quaerat modi
        labore voluptas perferendis sapiente ut odit doloribus voluptates,
        nesciunt exercitationem odio dolor saepe culpa veritatis deserunt nulla
        reiciendis cupiditate accusamus facere harum ducimus? Laudantium
        provident voluptatem a ut! Debitis numquam sit modi aliquid laboriosam,
        quibusdam reprehenderit. Deserunt alias, dolorum odio magnam quam ipsam,
        beatae minus maiores assumenda consequatur expedita aliquam. Omnis
        praesentium quia eaque reprehenderit atque sapiente asperiores fuga
        totam voluptate deleniti ratione, officiis nemo ad. Architecto corporis
        aut unde sit dolorum cum quibusdam voluptatum excepturi ad quod velit,
        suscipit beatae nemo explicabo iure, ullam dolores, dicta nihil?
        Assumenda fugit similique tempore nulla ab ratione labore consectetur
        itaque molestiae ipsam odit quisquam omnis, excepturi pariatur, incidunt
        amet ipsa delectus sed deleniti necessitatibus. Similique quisquam
        tempore voluptatem nisi? Praesentium eum iusto nihil aut ipsa ad earum
        minus soluta? Officia quia suscipit unde, non nemo ipsa pariatur
        expedita inventore, a velit ex, tempore assumenda quas accusantium sunt
        rerum numquam praesentium. Laborum error illum culpa, nulla totam
        dolorem illo ex numquam, dignissimos corrupti id, sapiente neque
        provident recusandae consectetur veritatis minus voluptatibus ducimus.
        Culpa tempora, odit eos nesciunt tenetur eaque recusandae nisi autem,
        quia illo aperiam vitae, dolorem laboriosam quod ratione quaerat
        praesentium beatae laborum molestias iure cumque? Molestiae doloribus
        eaque sapiente animi. Optio quam temporibus excepturi dignissimos
        adipisci ipsa distinctio ullam numquam assumenda aperiam alias, dolore
        voluptatum rem dicta quo dolorum tenetur quia eaque fugiat? Sapiente
        saepe corrupti delectus recusandae voluptas eius voluptatum hic
        excepturi possimus. Aliquam quam exercitationem expedita blanditiis
        eligendi beatae eius assumenda tempora optio cupiditate incidunt
        repellendus ipsa, iste ab ipsum voluptatem necessitatibus dolorem dolore
        reiciendis natus sint. Molestiae voluptas libero assumenda odit repellat
        sapiente necessitatibus neque? Perspiciatis reprehenderit ab quam est
        dolor maxime, tempore labore ipsam delectus repellat sint velit
        inventore exercitationem magni voluptatibus? Odio saepe libero iste amet
        doloremque enim qui rerum eaque natus. Nihil esse est, rerum quisquam et
        nemo assumenda eveniet incidunt, itaque explicabo, magnam nam
        perspiciatis! Ex reprehenderit, repellat eius beatae minus aliquam? Ea a
        accusantium inventore animi nulla tenetur vitae enim maxime. Modi neque
        natus laborum illum quo? Omnis nobis libero corrupti sapiente
        repellendus ullam quos, obcaecati amet quasi iste ratione veniam,
        corporis aperiam enim, optio impedit id. Vel dolor hic perferendis ipsam
        accusantium quis aspernatur, deserunt, sint dignissimos odio nulla enim
        vitae tenetur placeat fuga doloribus cum, quo temporibus quibusdam quia
        natus ab aliquam nesciunt qui. Assumenda illum nihil accusamus
        consectetur maiores nam repellat fugiat quia? Perferendis soluta
        delectus beatae enim laudantium dignissimos? Ea minus eaque dicta
        voluptas corrupti quas enim ducimus, amet sequi vel dolorum, deleniti ab
        ipsum atque nostrum ratione, dolorem saepe cum assumenda laudantium
        dolor! Doloribus temporibus amet assumenda sed commodi, facere quibusdam
        expedita mollitia nemo at atque deserunt inventore natus, dolor optio
        ratione incidunt ab earum enim! In culpa rem amet corrupti similique
        beatae, harum obcaecati vero eos magnam itaque soluta accusantium.
        Officiis rem adipisci beatae deleniti sit blanditiis totam et, ad
        obcaecati facere maxime minus voluptates eveniet explicabo aut voluptate
        a illo harum deserunt provident debitis! Voluptas veritatis id harum?
        Inventore dolorem tempora ducimus. Dolore odio qui dolorem officia culpa
        quaerat labore excepturi iure, incidunt, eveniet mollitia ducimus
        voluptatum. Eligendi, laborum in. Vero aliquid commodi quo asperiores
        recusandae iusto ex tempora quasi molestiae quibusdam. Eum magnam eos
        maxime consequatur aliquid fugit vitae iusto accusantium corporis
        nesciunt! Nostrum beatae alias, libero eum pariatur, repellat dolores
        iusto maiores earum provident molestiae quos, iste nam. Molestias magnam
        id ullam dolores quis quaerat minima aliquid expedita et itaque cum
        eveniet repudiandae laudantium vel tempora soluta placeat unde
        perspiciatis sint, sapiente a quos. Culpa delectus animi fugit impedit
        aspernatur nemo vero, perferendis ab sunt, ipsa at laboriosam distinctio
        neque accusantium doloribus quisquam eos illo molestiae repudiandae?
        Cumque voluptate quam inventore nesciunt voluptas iste, eius ducimus
        dolore porro sint obcaecati iure facilis, magni quos ratione cupiditate
        magnam ullam omnis reprehenderit debitis rem nulla molestias minus?
        Atque voluptas aliquam impedit magnam asperiores eos delectus? Mollitia
        ut excepturi reiciendis labore ratione iure! Nemo voluptates magni
        ducimus, quo illum veritatis similique? Inventore commodi recusandae
        quidem laboriosam molestias voluptatibus sapiente molestiae error est
        iusto voluptatum doloribus itaque quos culpa iure soluta veniam
        praesentium nemo nobis, nostrum ipsa dignissimos temporibus facilis
        velit. Aut repellendus, sunt perferendis rerum illum omnis atque nostrum
        ut molestiae corporis itaque doloribus numquam! Commodi porro, inventore
        est libero laudantium fugiat tempore recusandae veniam temporibus
        beatae? Obcaecati, omnis quos tempora maxime nisi atque eum saepe, ipsam
        ut nam nostrum deserunt, perferendis veritatis magnam? Voluptatem vero
        accusantium veritatis praesentium facere molestiae, itaque ab,
        asperiores cumque tempore adipisci, iste officia! Voluptate magnam
        tempora nihil aliquid culpa eaque, beatae saepe veritatis pariatur
        suscipit laborum totam est voluptatem illum temporibus voluptatibus
        aliquam odio. Aspernatur id commodi repudiandae exercitationem
        provident, tempore fuga obcaecati hic sunt laborum tenetur nobis
        nesciunt ullam at beatae quos quo ipsa quas soluta eius officiis.
        Delectus quos eos suscipit unde ut consequuntur ipsa nostrum corporis,
        fugiat officia facere dolor impedit totam! Ipsam ratione delectus animi
        accusantium perspiciatis porro laboriosam voluptatem ullam voluptate
        similique natus eum recusandae magnam veniam corrupti, hic assumenda
        dignissimos enim. Fugit blanditiis quibusdam sit fuga libero hic vitae
        sint aliquam nulla id rerum illo, ipsam veritatis eaque enim eveniet sed
        minima consequuntur facere odit voluptas, nisi vero voluptates ratione.
        In, est praesentium, quos rerum non veniam consequatur reiciendis ut
        possimus natus nemo enim unde, quibusdam facilis voluptatem velit
        aperiam exercitationem provident neque maxime accusamus sunt minima?
        Sapiente a non deserunt sint asperiores ea numquam perspiciatis at
        impedit itaque? Rem possimus quia facilis itaque soluta minima!
        Mollitia, voluptate? Rerum non blanditiis quo nulla nobis veniam vel
        praesentium? Dignissimos totam, ipsa esse atque animi, veniam
        voluptatibus placeat illum adipisci numquam nihil inventore vero saepe.
        Aperiam amet numquam libero architecto fuga voluptas ab nostrum sint
        adipisci dolor minima laboriosam ex ratione esse vel autem qui,
        dignissimos dolorum? Amet, incidunt. Amet iusto ullam at, reiciendis
        obcaecati magni! Repellat iste beatae unde totam dicta, at ab saepe
        obcaecati, quia tenetur magni, fugiat laudantium aliquam commodi. Nulla
        facere, voluptatibus unde et sit in numquam dolorum possimus officia
        cupiditate voluptatem veritatis quidem animi. Quam, animi quos tempore
        hic deserunt officia consequuntur autem aspernatur harum sit corrupti
        voluptatum corporis natus cum minima quia iure nulla ducimus sequi
        placeat distinctio possimus! Maxime molestiae magnam corporis similique
        minus modi quasi expedita voluptas animi ullam, nisi, nulla assumenda
        doloremque odit? Aspernatur officiis officia doloribus similique labore
        porro illo magnam! Doloribus tempora corrupti aperiam dignissimos,
        dolore accusamus! Quas quo, obcaecati iusto illo id quaerat dolor
        aliquam rerum quos voluptatum, atque consequuntur suscipit porro
        distinctio maxime. Fugiat ut quibusdam deserunt! Soluta reprehenderit
        mollitia delectus voluptate accusantium omnis distinctio sint voluptatum
        dicta. Hic, magnam, sit accusamus perferendis fuga commodi sunt nobis
        ratione autem atque sequi alias quia debitis vero illo ducimus. Nostrum
        laudantium doloribus cumque eos velit soluta quis, tempora laborum rem
        maiores temporibus deleniti alias. Eligendi laborum non in esse? Ducimus
        modi sequi praesentium. Deserunt optio porro aperiam dolores asperiores!
        Amet dignissimos fugit nobis? Amet, deserunt? Voluptatibus laborum id
        odit numquam est, magnam, quis temporibus et ut repellat assumenda
        soluta harum cupiditate corporis dicta maiores ipsa nesciunt commodi
        labore. Aliquam repellat tempore reiciendis veritatis consequatur culpa
        sint, voluptates laborum suscipit quam amet eius esse ipsam nesciunt!
        Eaque, iure cumque inventore odit voluptate cum sunt provident soluta
        qui numquam, unde fuga dicta. Numquam dolores quisquam nobis ea amet cum
        odio, dolore quasi impedit, aliquid distinctio laudantium fuga sequi
        modi repellat tempora laborum nostrum optio vero provident. Nesciunt
        velit nulla deserunt consequatur dicta aut. Quidem possimus error velit
        autem nihil excepturi accusantium accusamus consequatur distinctio
        laudantium, perspiciatis iste exercitationem repellat eum adipisci et
        laborum sapiente. Quasi, illum. Fuga rerum voluptatum saepe voluptate
        dolores? Ut ipsa sint sunt doloribus. Aut rerum commodi non reiciendis
        sed aliquid molestiae ducimus cum. Quod praesentium tenetur minima
        pariatur dolor quisquam, architecto facere expedita repellendus possimus
        voluptatum, quibusdam neque voluptatibus magni, laborum aut. Placeat
        cumque, eveniet adipisci ad ipsum unde, modi ex voluptatum doloremque
        aliquam amet aperiam, nihil tenetur reprehenderit magni hic? Natus fuga
        soluta veniam voluptatibus itaque fugit iste voluptate neque quam?
        Nulla, quidem quo in eligendi laboriosam dolores vel consectetur
        molestiae nostrum. Sunt dolorum perspiciatis vero possimus dolore,
        voluptatem, officiis nam dolorem at odit distinctio laboriosam eveniet
        molestiae provident eius, fuga totam repellendus et. Distinctio debitis
        architecto vel qui dolore sequi quibusdam asperiores voluptate possimus,
        perferendis tempora cupiditate exercitationem fugiat officiis quod eaque
        ex dolor doloribus. Non maiores sint perferendis minima eveniet quis
        iste, quidem nesciunt animi reiciendis natus aperiam sunt culpa repellat
        tenetur incidunt accusantium commodi nulla autem ipsam tempore pariatur
        possimus. Provident, fugiat officia. Asperiores ducimus quas nam
        molestias vitae molestiae saepe ipsa commodi illo corporis porro ad,
        itaque eveniet id? Autem culpa sunt alias at asperiores voluptate, optio
        neque illo illum adipisci aspernatur minus eum dolore, consequatur eius
        aliquid. Deserunt accusantium fugit, quam atque fuga totam, alias sequi
        asperiores vitae magnam modi quod incidunt culpa ad quisquam, officia
        minima aspernatur dolorem eum mollitia corrupti ducimus repudiandae
        dicta! Repellat cum commodi dolorem illum, iste ducimus odit odio eaque
        eius magni voluptate explicabo quae temporibus ipsum! Expedita omnis
        molestias veniam nihil accusantium ad delectus earum maiores distinctio
        reprehenderit necessitatibus corrupti maxime in mollitia reiciendis
        officia pariatur neque nemo, quis voluptatum a vitae inventore. Libero
        eius earum itaque maxime suscipit harum culpa quibusdam! Eaque, labore
        reiciendis! Dolor culpa reiciendis quas eius. Facilis aliquid dolor
        molestiae sequi impedit aspernatur inventore voluptatibus nostrum odit
        iusto incidunt repellat voluptas, excepturi commodi iste asperiores eum.
        Culpa neque qui doloremque quo enim iste, repudiandae saepe atque. Eaque
        voluptates tempore praesentium sed laboriosam. Repudiandae aliquam enim
        vitae ullam corrupti dolor, aperiam qui hic autem, minus molestias?
        Sapiente, incidunt? Sed itaque repudiandae, nesciunt cumque possimus
        accusamus reprehenderit hic, dignissimos asperiores recusandae minima,
        dolorem modi deserunt adipisci eaque rem a voluptates eius odio magnam.
        Recusandae culpa sint magnam earum quos autem facilis dolores eos, magni
        maxime cumque eveniet eius vel adipisci eaque blanditiis veritatis sed
        dolore quam at molestiae. Placeat autem saepe doloremque blanditiis
        consectetur at accusantium aliquid perferendis officiis omnis maiores,
        fugiat nemo neque qui ad quis deserunt. Dolor vero quibusdam cum
        accusamus voluptas, delectus debitis! Doloribus iure possimus deleniti
        reprehenderit culpa, quaerat quod voluptas voluptate? Vitae sed quos
        dignissimos ipsa explicabo recusandae temporibus quidem, obcaecati
        incidunt totam dolores deserunt beatae perspiciatis. Voluptatum
        repellendus ea quos, quasi possimus aut odit expedita nesciunt.
        Voluptatibus molestiae consectetur deserunt, quam sapiente aliquam, sunt
        tenetur harum obcaecati, ut eaque similique ratione.
      </p>
    </div>
  );
}

export default Home;
