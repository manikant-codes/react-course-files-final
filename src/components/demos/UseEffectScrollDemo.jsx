import React, { useEffect, useState } from "react";
import useScroll from "../../customHooks/useScroll";

function UseEffectScrollDemo() {
  const { scroll, scrollToTop } = useScroll();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  console.log(width);

  return (
    <div>
      {scroll > 500 && (
        <button
          style={{
            padding: "8px",
            position: "fixed",
            right: "50px",
            bottom: "50px",
          }}
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )}
      {width > 500 && <img src="/images/01d.png" />}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, modi?
        Cumque illo ducimus illum dicta. Accusantium non sunt et sint modi
        doloribus deserunt veritatis ipsa autem totam quam, delectus consectetur
        possimus inventore eos optio laudantium, necessitatibus, minima
        consequatur fuga sequi? Ratione doloremque, quae magnam eligendi
        consequatur quibusdam quisquam id nisi aliquam ullam nulla ab
        praesentium dolores autem, neque minima quo, enim expedita deserunt!
        Incidunt quod impedit tenetur, odit quasi ipsum similique? Magnam optio
        minima recusandae. Cumque consequuntur ipsam reiciendis blanditiis nam
        amet aliquam at adipisci a placeat, fuga, accusamus nostrum fugiat ea,
        vero ut mollitia repudiandae pariatur ratione sed facere laboriosam?
        Consequatur facere suscipit inventore, accusamus distinctio a sint
        deserunt, aut earum eveniet similique. Unde ad vel quisquam maxime iste
        laudantium eum esse quis nostrum earum doloribus consequuntur, ab optio
        molestias sint labore deleniti ea sequi repellendus excepturi? Saepe
        illo nemo delectus numquam officia porro repellat odit iusto reiciendis,
        incidunt, sapiente cupiditate rerum eius perferendis expedita aperiam
        distinctio deleniti ratione itaque odio corporis, fugiat error quo!
        Modi, dignissimos nemo fugiat tenetur molestias ipsum exercitationem
        non! Voluptatum provident suscipit molestiae non. Enim, mollitia quaerat
        earum neque sapiente est! Ex reprehenderit ipsum nostrum cumque eius,
        magni laboriosam nisi tempore necessitatibus eum quam est non voluptatem
        quisquam asperiores mollitia architecto sapiente exercitationem! Error
        laboriosam ipsum est officia ipsam fugit eos, mollitia, consectetur eius
        minima id omnis! Laborum modi libero velit qui laudantium harum fugit
        est ipsa dolores commodi itaque reiciendis aperiam incidunt veritatis
        sequi autem vitae sed unde cum odio laboriosam, iure debitis? Sequi
        soluta illo officiis placeat voluptates. Obcaecati iste harum odio esse
        saepe laboriosam voluptate eius tempora corrupti assumenda adipisci eos
        incidunt tenetur, nihil vitae cum, ex ipsa perspiciatis nam doloremque
        porro, iure maiores. Officiis, voluptas ipsum illo, soluta est fugiat,
        numquam minus eligendi reprehenderit expedita facere maiores odit? Iure
        sint sed itaque perferendis, aspernatur odio vel beatae, enim
        accusantium, doloribus quis blanditiis? Aperiam et mollitia deleniti
        quas nisi, iste commodi velit. Dignissimos animi perferendis deleniti
        nisi laboriosam ipsa ipsam unde adipisci deserunt omnis, culpa eligendi
        amet nam vero repudiandae! Sint soluta inventore ex, nemo magnam
        reprehenderit. Facere quam aut, sint veritatis quia, doloribus beatae
        repellendus sit perferendis sapiente esse nostrum libero porro
        perspiciatis dicta blanditiis reprehenderit, laboriosam fugit itaque
        minima. Totam perferendis voluptas officiis laboriosam facere maxime rem
        ipsum eius alias quos. Sapiente vero, magni veritatis ipsum quas
        assumenda sunt mollitia voluptas, explicabo autem id fugiat ipsa atque
        doloribus? Consequatur quibusdam ea tenetur ex natus. Officia dolores
        provident dolore assumenda necessitatibus enim ullam molestiae voluptate
        ducimus praesentium voluptas, perspiciatis repellat quod laboriosam
        animi nam aspernatur facilis totam tenetur! Amet dignissimos est
        mollitia soluta voluptatum magnam reprehenderit nisi, dolor labore
        voluptates ipsa repudiandae vitae. Reiciendis voluptatum possimus sequi
        architecto aperiam animi ratione molestias quisquam, quas cum, fuga
        pariatur quos quo officia praesentium. Quia architecto deserunt unde ad
        aperiam vitae eligendi odio vero mollitia commodi, ea quae at repellat
        et atque maxime similique! Ullam autem recusandae consequatur
        doloremque, velit magnam facilis illo pariatur optio alias magni aliquid
        deserunt et! Atque ipsum vero architecto molestiae adipisci aliquid.
        Laborum, aliquam maiores quaerat quam consectetur blanditiis voluptate
        porro totam earum eaque dolorem libero nemo est dolorum ducimus dolores
        minima nisi, cupiditate debitis ipsum soluta culpa aut aliquid.
        Perferendis error voluptate esse eligendi laborum provident nobis,
        quibusdam voluptatibus asperiores non itaque fuga minus iusto
        consequatur modi perspiciatis accusamus ab ipsam? Esse ipsam cupiditate
        amet? Ut provident recusandae impedit alias cupiditate qui explicabo
        eveniet fugiat voluptas, dignissimos voluptatem quod blanditiis aperiam
        similique dolorem neque! Nesciunt neque aliquam illo ut omnis in. Cum
        dolores officiis ad asperiores deleniti, quidem possimus veritatis totam
        laudantium cupiditate magnam quae, nihil ab id pariatur? Animi
        recusandae amet debitis, molestias, aliquid voluptatum voluptas qui
        nulla quod nesciunt rem earum mollitia eius fugiat consectetur alias
        ducimus commodi est cupiditate officia eaque voluptatibus? Hic eaque
        pariatur molestias ipsam minus illum ducimus, est incidunt accusamus nam
        iure, perspiciatis, animi reprehenderit tempore? Veritatis, rem hic
        repellendus voluptatibus accusantium, voluptatum molestias numquam
        ipsum, necessitatibus aut culpa consequatur. Magni dolorem unde eaque
        temporibus, neque ipsam a. Eos tempora repellendus consequatur
        voluptates, aut temporibus, officiis qui dolorem accusantium mollitia,
        beatae commodi ducimus facilis perspiciatis fugiat magni tempore est
        sequi earum impedit ex soluta totam? Nisi, dignissimos iusto. Sint
        voluptas voluptatibus non ipsam, neque esse hic, beatae nesciunt
        molestias, odit aspernatur et quis. Ipsa perspiciatis impedit facilis,
        eius recusandae fugiat excepturi reprehenderit modi adipisci debitis
        corrupti, voluptate ea? Itaque placeat harum rerum earum dolores
        accusantium, ea molestias quibusdam blanditiis! A odit consequatur nam.
        Deserunt officia tempore, eveniet deleniti debitis accusantium sunt
        explicabo. Facilis dolorum, dolor deleniti asperiores illo voluptatem
        unde soluta sequi autem debitis quaerat, expedita, rerum obcaecati.
        Excepturi aspernatur voluptatem repudiandae? Aliquid pariatur
        voluptatibus numquam iusto iure quis fuga earum dignissimos itaque porro
        molestias accusantium, nobis similique voluptas officiis voluptatum
        alias consequuntur architecto ea molestiae vel ad. Impedit at nemo
        tenetur voluptatibus dignissimos repellendus quam earum sapiente. Natus
        corrupti doloribus minus obcaecati ratione alias soluta voluptas
        tempora. Delectus incidunt iusto ea quos rem eaque officia deleniti
        officiis magni amet quas, qui eligendi voluptatibus, odit adipisci quae
        sint nam numquam sapiente. Tempore et maiores quidem eveniet aut quae
        aspernatur quasi enim quis nesciunt, in iure ut adipisci architecto
        neque non ea! Vero voluptas laborum quidem error accusamus quia dolorum,
        atque ullam eos. Adipisci et dolorem eius reiciendis quo possimus,
        consequuntur vel ratione corrupti, quos sunt commodi quidem qui
        provident ex tempora porro ipsam maxime nihil id quis. Corporis nemo
        suscipit, ut quaerat vero ipsam quis nam harum inventore perferendis
        commodi totam magnam veniam temporibus autem reprehenderit tempore omnis
        quidem consectetur aut dolores cupiditate assumenda impedit! Possimus,
        mollitia! Praesentium, animi obcaecati ea eius magnam minus commodi,
        tempora, dolores quasi minima sequi excepturi natus quam aut veritatis
        corrupti? Fuga doloremque commodi sit expedita non itaque quas earum aut
        odit magnam impedit voluptatum quidem quia aliquam accusantium, vitae
        nostrum nobis beatae quibusdam sequi aperiam possimus. Doloremque
        numquam fuga quasi eligendi delectus. Quae minima vel sit molestiae, ea
        dolorum voluptatibus laborum ex voluptas nobis ipsa voluptates
        repudiandae reiciendis asperiores tempore maiores adipisci. Repellat
        libero voluptatum ducimus aut nam? Quae autem error, suscipit omnis
        similique, id consequuntur perspiciatis quas facilis delectus
        repellendus. Aut, aliquid minus pariatur similique voluptatem eum? Nisi
        hic at, ad asperiores incidunt officiis architecto iste natus nihil ex
        nulla voluptas fugiat facere, sed nobis illo veniam commodi illum
        perspiciatis temporibus recusandae impedit neque quam accusantium?
        Molestiae et at aut exercitationem provident dolorum commodi numquam
        quidem ducimus dolor, vel dolore nobis similique aliquid odio ipsum
        placeat alias voluptatibus. Explicabo unde odit laudantium ipsa facilis,
        eligendi, a maiores ratione error, officiis numquam omnis aut itaque
        tenetur voluptate placeat illo blanditiis iste dolorem expedita adipisci
        vel! Sapiente beatae expedita repudiandae rerum itaque. Sequi ipsum
        quod, sed accusamus molestiae eum itaque dolorum provident nobis fugiat
        nulla veniam delectus ab? Possimus tempora doloribus, nisi eos, sed
        quisquam quia totam distinctio beatae dolores mollitia eum atque sunt
        molestiae! Voluptatum adipisci fugit odit praesentium magni! Dolores
        commodi quis expedita quam nobis quas repellat minus ipsam dolor ex eius
        et exercitationem sunt ab iure porro quo, maxime veritatis facere iusto
        nam nemo iste quisquam? Repellat iste autem assumenda facilis fuga,
        molestiae vel atque quaerat laboriosam dignissimos ea ipsam earum
        commodi illo iusto maxime at officiis, et, suscipit dolorum dolor quasi
        impedit quia. Cumque ullam est sequi dolorum consectetur illum modi
        praesentium minima tempore, at velit illo officia doloribus? Nesciunt
        distinctio nobis necessitatibus omnis perspiciatis praesentium laborum.
        Debitis natus commodi asperiores, molestias repellendus modi iure, culpa
        dolore quibusdam blanditiis excepturi temporibus sequi placeat, facere
        rem suscipit cupiditate exercitationem. Quis ab accusantium quasi fuga
        blanditiis, quia iste, quam, corrupti sint obcaecati eos laborum amet?
        Quos ad, odit perspiciatis adipisci necessitatibus repellendus eaque est
        optio obcaecati autem nemo blanditiis quasi exercitationem dolorum
        magnam cumque amet architecto placeat, voluptates commodi. Possimus,
        natus quidem ipsam saepe commodi sint doloribus, labore dolores
        obcaecati debitis dignissimos minima fugiat! Nam saepe consequuntur enim
        reprehenderit in alias ea mollitia aut sed dicta quisquam, sunt dolorem
        nihil fuga. Placeat rerum minus soluta ipsam praesentium sapiente
        asperiores ab tempora eligendi quia deserunt, ex nam, aut consectetur
        alias voluptate molestias consequatur odio mollitia perspiciatis
        voluptatum corporis. Quidem tempora esse veniam iste debitis molestias
        totam praesentium fuga. Iure iusto ad eius temporibus nam delectus
        itaque accusantium, incidunt repellat provident optio praesentium magni
        nostrum dolores repellendus maiores? Unde debitis consequuntur nemo
        veniam nam delectus fugiat veritatis aut, deleniti ipsa quos temporibus
        incidunt aliquam labore mollitia et exercitationem sed qui? Ea, quos
        cumque. Eaque maiores optio atque laborum corporis, quos aspernatur
        ipsum harum porro deleniti, autem enim nostrum accusamus itaque facilis
        unde nam tenetur corrupti, totam tempora dolorem dicta labore. Nesciunt
        cum temporibus aut error, veniam velit? Excepturi facilis ullam
        repudiandae dolorem explicabo quo aperiam veniam ducimus, corporis ipsa
        voluptas possimus, amet a error minima neque? Suscipit laboriosam nemo
        architecto asperiores alias esse ipsum amet tempore eius, reiciendis
        neque perferendis dolore delectus temporibus molestias id perspiciatis
        corrupti possimus deserunt! Deleniti, facilis labore nesciunt qui
        quisquam nobis aliquid excepturi magnam voluptatum officia deserunt quae
        asperiores illo nisi? Nisi, dolores commodi laboriosam aut delectus
        alias suscipit expedita fugiat recusandae adipisci. Quae nihil cum
        officiis ipsa eos eligendi corrupti iste iure numquam ullam velit quia
        explicabo cumque odit recusandae, minus veritatis ducimus. Dolore,
        ipsum? At, nisi? Ad nesciunt sed vitae eum distinctio illo. Quo nemo
        eveniet facilis quod vero beatae doloribus, aut libero animi consequatur
        nam natus sit suscipit dolores laboriosam accusamus voluptate nesciunt
        tenetur, rem sapiente voluptatum hic nisi odit laborum? Quam voluptates
        dicta cum unde, eligendi cumque voluptas doloremque sapiente laborum
        error eum laudantium, quasi vel harum tempore soluta fugit quibusdam
        obcaecati perferendis! Odio repellendus cum at placeat ea aliquid ipsum.
        Nobis aliquid rerum ad quis incidunt, odio minima! Cum labore aliquam id
        adipisci, temporibus ratione provident numquam minus earum. Quibusdam
        veniam reiciendis fugiat officiis voluptatibus ipsa praesentium corrupti
        blanditiis. Ex at incidunt hic eos obcaecati. In labore quod, dolores,
        exercitationem natus dicta esse doloribus quisquam dolore repellendus
        tenetur illum maxime quidem ut enim maiores delectus molestiae tempore
        beatae. Quia fuga, aliquam quod ipsam non architecto minus. Quibusdam
        corporis sed rerum vitae, optio nisi eaque, necessitatibus totam quidem
        suscipit cumque dolores dolorum, sit quisquam. Reprehenderit, nobis!
        Tenetur natus voluptatibus sunt perspiciatis voluptate maiores aperiam
        facere, architecto fugit reprehenderit tempore iure harum? Odit
        exercitationem est iusto, in laborum aliquid non possimus aut
        voluptatibus ducimus debitis praesentium reiciendis odio? Ex, dicta ea.
        Adipisci dolor eaque molestias error exercitationem quasi odit obcaecati
        animi, ea, earum praesentium voluptatem eum! Vero tenetur ut eveniet
        architecto labore quos nobis recusandae, distinctio dicta sint. Maxime
        cupiditate non voluptas delectus veniam fuga vero molestiae debitis unde
        neque. Ducimus libero odit sapiente rem quam ab explicabo quaerat,
        facilis adipisci maiores nisi ipsam pariatur a, aliquam illum deleniti
        veniam neque eaque eum. Deserunt totam nesciunt molestiae voluptas velit
        praesentium libero! Ipsum explicabo ut neque commodi alias dolorum saepe
        similique! Eveniet debitis aut quae earum impedit dicta nulla vitae!
        Maxime vitae nulla, deserunt quo laborum illum id est, sit, pariatur
        temporibus debitis blanditiis repellendus. Veniam ullam minus
        recusandae, voluptates, hic saepe, et quam veritatis cumque voluptate
        excepturi ab. Animi eum ratione iusto cumque beatae sint reiciendis
        eaque molestiae accusantium, incidunt at officiis ea cupiditate ab sequi
        vero sed reprehenderit similique ipsa nisi quam tenetur molestias
        laborum delectus. Asperiores maiores commodi, nulla aut dolorem incidunt
        omnis dolorum quidem soluta quasi. Nam quisquam labore amet fugit soluta
        a doloremque, alias quos, aspernatur aliquam numquam possimus enim
        impedit eius distinctio veniam modi laboriosam necessitatibus minima!
        Libero expedita quibusdam rerum architecto corporis, laboriosam minima
        perferendis alias sequi fuga, maiores culpa, aspernatur nesciunt nulla
        eaque ea. Ducimus placeat impedit saepe minus illum quia facere, dolores
        soluta dignissimos consectetur architecto repellendus hic reiciendis
        nisi numquam eligendi magnam eaque suscipit aperiam aliquid neque natus
        nulla non. Necessitatibus ullam a sint itaque adipisci neque sunt
        commodi, doloremque quas distinctio quam temporibus culpa repudiandae
        fugit eaque dicta, velit veniam animi expedita maxime! Officia facere ab
        et, praesentium ratione aperiam nemo commodi. Consectetur dolore quo ea
        magni totam doloribus iste perspiciatis obcaecati illum ad vel iusto a
        deserunt optio aperiam, libero quis rem quas nulla? Laudantium quidem
        tempora sapiente maiores ullam deserunt adipisci natus rem saepe.
        Architecto dolores soluta molestias commodi, eveniet voluptate
        blanditiis iure fugit ipsam mollitia error possimus aliquid pariatur
        sunt, quod quaerat quas dolorum adipisci corporis explicabo dolorem
        nobis qui libero. Repudiandae facere deserunt suscipit voluptatum rem,
        debitis earum minima similique inventore quas alias nisi officiis ex,
        est mollitia odit cumque adipisci praesentium nostrum repellat eveniet
        sed harum pariatur? Ducimus, porro! Facilis eius illum aliquam alias
        natus similique quaerat commodi a doloremque maxime, sequi, beatae saepe
        dolorum placeat illo fuga. Illo aliquid ipsum magni doloribus facilis,
        eos sint autem soluta voluptatibus deleniti sed dolor incidunt
        laboriosam animi delectus sequi adipisci laudantium. Vitae, itaque.
        Officia similique ad eum quaerat, nihil et ullam doloremque laudantium
        totam? Possimus repellendus consequuntur soluta nulla, commodi omnis.
        Provident, eius culpa? Culpa explicabo eveniet consequatur accusantium
        quae maxime dolorum cupiditate ullam eius iure, corporis nam earum?
        Corporis aperiam beatae fuga in blanditiis laborum ab rerum excepturi
        assumenda adipisci. Recusandae, aliquid sit inventore dolorum magni
        nesciunt aut. Accusamus earum veniam ex quia quidem voluptate placeat
        accusantium tempore facere eveniet quod harum at eius odit explicabo,
        laudantium iure iusto dignissimos distinctio nihil nobis corporis
        inventore fugiat doloremque. Voluptatibus asperiores exercitationem, rem
        at odio amet deserunt ipsam necessitatibus dolorem. Autem qui delectus
        ducimus magnam inventore! Similique, asperiores dicta provident
        molestiae reprehenderit animi, iste consectetur molestias ratione ex ab
        vel esse vero. Aut neque voluptatibus omnis sint, corporis nobis eaque
        modi a recusandae optio soluta similique aliquid minima itaque
        consectetur laudantium velit, repellat assumenda nulla! Tenetur eaque
        saepe id pariatur aut sint dignissimos voluptatum soluta impedit
        consectetur? Asperiores reiciendis non dolorem amet explicabo, sunt
        doloribus exercitationem debitis optio voluptate corrupti atque ipsam
        tempore deserunt esse architecto ipsa ab natus beatae maiores nulla.
        Voluptas molestiae placeat dolorum repudiandae. Perferendis mollitia
        eveniet, sed molestias minima incidunt. Dolor ducimus consequatur,
        accusantium assumenda reiciendis molestiae maiores excepturi dolorum!
        Ipsa adipisci earum nisi illum voluptate sit eius exercitationem,
        officiis ex vitae quibusdam. Eaque, fuga doloribus tenetur amet numquam
        perspiciatis voluptatum blanditiis ducimus facere deleniti reiciendis
        eligendi ratione laboriosam rem aliquid consectetur quis libero corrupti
        dolor, ut repellat voluptates ullam! Minus perferendis libero, veniam
        minima dignissimos beatae esse, eaque, commodi quasi repellendus
        expedita enim voluptas ducimus itaque impedit molestias necessitatibus!
        Architecto enim dicta mollitia ut non magni est vel ipsam voluptate,
        voluptas veritatis quisquam minus laboriosam? Eveniet beatae architecto
        mollitia accusantium, eos sequi corrupti praesentium illo quae itaque
        molestiae saepe voluptates velit accusamus nesciunt excepturi
        necessitatibus. Dolorem reiciendis ut ratione, rerum libero numquam
        perspiciatis minima sit? Nostrum cum autem est, asperiores perspiciatis
        laudantium. Deserunt, saepe aspernatur dolorem iste, adipisci rem eos
        expedita qui quaerat soluta neque veritatis provident est dolorum fugit
        fuga architecto eius. Ex consequuntur accusamus provident deserunt
        voluptatum. Sapiente autem cupiditate accusamus eaque placeat temporibus
        earum modi itaque. Nesciunt perferendis veritatis deserunt vel esse
        assumenda, et quis minus corporis dolore, praesentium at, sint nulla
        libero! Quibusdam error ratione itaque voluptatum ducimus quidem, earum,
        repellat laborum dolorum consequatur praesentium neque fugiat optio
        vitae repellendus quo eaque, mollitia expedita eum vel quam!
      </p>
    </div>
  );
}

export default UseEffectScrollDemo;
