import React from 'react';
import './App.css';
import { ThreeDCardDemo } from './components/3d-Comp';
import { TracingBeamDemo } from './components/beamcenter';
import localdb from "./assets/dbLocal.json";
import Starfield from 'react-starfield';

function App() {
  return (
    <>
    <section className="container mx-auto px-4 py-8">
    
      <Starfield
        starCount={4000}
        starColor={[255, 255, 255]}
        speedFactor={0.06}
        backgroundColor="black"
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Attractive Page!</h1>
      <div className="grid-container">
        <div className="grid grid-cols-2 gap-8">
          {localdb.map((item, index) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginTop: index % 2 === 0 ? '25em' : '0' }}>
              <ThreeDCardDemo
                id={item.id}
                date={item.date}
                description={item.description}
                icon={item.icon}
                title={item.title}
              />
            </div>
          ))}
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TracingBeamDemo />
          </div> */}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe expedita alias laudantium temporibus, cumque qui? Quaerat, ea veniam cupiditate voluptatibus, numquam culpa esse quasi earum soluta doloribus ipsum. Odit iure voluptatibus repudiandae? Est ipsam et, illo officia iure assumenda harum quas, atque nihil pariatur commodi placeat ipsa neque adipisci voluptatum quidem. Fugiat error veniam quae et nam reiciendis ducimus dolorum, ipsam, explicabo, distinctio iusto harum quisquam labore dolores molestiae consequuntur mollitia id! Eaque tenetur ipsam sunt ratione omnis odit deleniti, iusto repellat magni in praesentium eius nesciunt dicta quam cumque neque provident, officia, distinctio debitis nobis consequatur harum sint molestias aliquam. Quia omnis ipsa blanditiis id sed tenetur, doloribus voluptas natus modi nam alias at totam quisquam numquam quaerat quam minus earum, iure asperiores! Ipsa fugiat earum ratione quam ipsam esse aut temporibus quibusdam assumenda labore incidunt, iusto ad cupiditate aliquam, veritatis error mollitia accusamus ut sit amet pariatur! Voluptas, nisi quod! Hic, voluptatibus quam molestiae magni repudiandae voluptatum doloremque placeat quae est omnis tempora molestias obcaecati amet, fuga laborum odit inventore, delectus aspernatur doloribus facilis praesentium! Odit ratione eaque quidem nisi praesentium porro temporibus? Eligendi similique excepturi molestias enim. Error, aperiam reprehenderit. Reiciendis optio minus, velit unde natus tempore earum autem necessitatibus dolorem officia? Inventore animi omnis nemo, impedit ipsa asperiores facere alias repellat hic cum at consequuntur minima eius quos delectus accusantium fugit quam provident expedita, fugiat eveniet adipisci neque. Voluptas placeat quisquam error similique aliquid alias veniam sit, facere voluptatem laboriosam eveniet ex vero nulla minus magni? Sapiente illo expedita dicta provident deserunt. Quidem, expedita? Autem enim maxime ullam totam eius voluptates distinctio quaerat, voluptatem sunt ex tenetur aut reiciendis, repellat officia fugit sint magni quisquam necessitatibus beatae delectus quas commodi? Quasi voluptate suscipit commodi quod maiores eligendi soluta cum consequatur accusamus dicta labore, laudantium, corrupti unde inventore cupiditate est similique? Sit error dolor, sunt odit quas quidem totam illum corrupti delectus exercitationem iusto libero voluptate vero deleniti ut possimus? Dolore iusto facere sequi aliquam reprehenderit quo, deleniti voluptatum laborum, similique soluta unde hic laudantium eius possimus facilis, non tempora ipsum. Magnam aliquid laboriosam nesciunt adipisci commodi veniam ullam sapiente obcaecati aut exercitationem. Fugiat odit ut sit reiciendis aut officia saepe iste error obcaecati perspiciatis tempore consequuntur, esse quidem corrupti corporis magni ratione. Porro dicta fugit tenetur corrupti facilis voluptatibus excepturi nisi ut, illum, repudiandae, praesentium omnis sint quaerat. Autem in harum laborum maxime excepturi impedit corporis unde repudiandae magnam veritatis eaque voluptatem, incidunt dolore dolores error cupiditate aspernatur mollitia eveniet sed nam aperiam. Fuga, vel labore officiis odio error expedita reprehenderit voluptatem natus modi fugit ab ea iusto! Unde distinctio assumenda, ab porro qui saepe deserunt eligendi animi exercitationem eveniet illum quidem eum, ut doloribus, ex mollitia corrupti corporis nobis omnis repellat suscipit expedita beatae repudiandae iste? Quisquam quasi minima sapiente perferendis odit, laboriosam facilis harum ut, ex in molestiae repellat quas aperiam, inventore soluta nisi maxime. Laudantium sint debitis rerum perferendis mollitia ea fugit ipsam harum pariatur ratione laborum dolorum nesciunt, quisquam tempora recusandae nam molestiae expedita corrupti doloremque placeat voluptatem blanditiis! Animi atque, labore quia nesciunt voluptas, sequi, facilis temporibus illo libero non culpa perferendis sed voluptatibus modi nulla. A cupiditate molestias, sapiente nobis, ea officiis perspiciatis animi nesciunt nihil repudiandae enim! Maxime architecto neque id impedit officiis quisquam blanditiis at magnam porro vero eius ad, repellendus hic autem voluptate provident consequuntur tempore sequi harum molestiae, commodi, dolorum ratione delectus exercitationem? Pariatur in ad magnam dolor itaque accusamus quibusdam cumque reprehenderit error recusandae officia et iste repellendus neque autem ratione, deleniti atque ea at eius. Quidem sapiente libero ipsa non repudiandae, fugit maxime! Ea harum nemo dolore minus esse eius vel deleniti, voluptates fugiat beatae explicabo, a inventore quas rem ut ex architecto blanditiis incidunt eligendi! Cum atque, enim quae ullam cupiditate sapiente, esse a perferendis animi dicta nisi impedit saepe corporis libero pariatur quasi officiis labore unde minima vitae ut mollitia porro! Numquam, enim? Vel rem voluptatem corporis dolore! Magnam distinctio optio facilis accusamus tenetur exercitationem, earum error iusto vero suscipit pariatur doloremque, libero, quo incidunt quos in deserunt! Iusto ad consectetur natus odit veniam aut molestias earum velit quibusdam. Ipsam rerum ex voluptatum porro qui perferendis consequatur obcaecati possimus itaque, quasi placeat non ab minus libero labore dolorum facere dolor aliquid, enim illo. Voluptatibus earum veniam placeat quaerat consequatur? Dolorem impedit explicabo unde adipisci iure! Molestias quas sit quibusdam laudantium quis incidunt modi maiores, aut quaerat numquam commodi quo, eius inventore, facilis magnam quae. Beatae labore itaque, exercitationem omnis molestias voluptas perferendis voluptate mollitia vero veritatis aut, non iste est, dignissimos illo sit aspernatur! Velit iste deserunt maxime voluptas consequuntur mollitia aliquid saepe incidunt laboriosam odio rem, quas cumque nisi harum voluptate, porro voluptatum ducimus provident dolorem, cupiditate aliquam id ea! Omnis hic modi temporibus et provident molestias enim nisi aut! */}
          <TracingBeamDemo/>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
