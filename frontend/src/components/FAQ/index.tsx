import Accordion from "react-bootstrap/Accordion";
import styles from "./styles.module.scss";

const FAQ = () => {
  return (
    <Accordion className={styles.container} defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div>What's JJ GroupLease?</div>
          <div>JJ团租是什么组织？</div>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            JJ GroupLease is the name of the leasing team led by Jennifer. We
            provide free and professional apartment leasing for international
            students.
          </p>
          JJ团租是一个由Jennifer领导的为留美学生提供免费专业租房服务的组织，目前经营范围限于德州。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Why choosing JJ GroupLease?为什么选择JJ团租？
        </Accordion.Header>
        <Accordion.Body>
          <p>JJ GroupLease provides you:</p>
          <ul>
            <li>Free and professional leasing consulting;</li>
            <li>Help to check in, sloving living issues and check out;</li>
            <li>Better deals renting apartment;</li>
            <li>Responsible team members to give you a safe and warm home.</li>
          </ul>
          <p>JJ GroupLease is the best choice for you.</p>
          <p>JJ团租可以为您提供：</p>
          <ul>
            <li>1. 免费而专业的租房咨询服务；</li>
            <li>2. 免费协助办理入住、搬出以及沟通解决居住过程中遇到的问题；</li>
            <li>3. 团租向公寓尽可能争取更好的优惠给大家；</li>
            <li>4. 团租团队成员以一颗负责任的心为大家提供最好的服务。</li>
          </ul>
          JJ团租是您最好的选择！
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          What are our strengths?我们的优势是什么？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Unlike agencies that rent apartments online, JJ Group Lease based in
            Texas an have adequate knowledge about the place. Not only we can
            provide you with detailed information about the orientation of the
            house, but also help you solve problems at any time during your
            stay. We hope you can have a reliable friend when living alone in an
            foreign country.
          </p>
          <p>
            不同于仅仅通过线上的方式租房的中介，
            JJ团租常驻在德州，对当地的环境非常熟悉。不仅可以随时线下看房，直观的告诉你房子朝向、装修的优劣等等，也可以在你入住期间随时帮助你解决很多问题，让你在异国他乡有一份温暖的依靠
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          How to apply through JJ GroupLease?那通过JJ团租租房的步骤是什么样的？
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>1. Choosing one apartment and one floor plan first;</li>
            <li>2. Looking for suitable roommates;</li>
            <li>3. Contact us via wechat, email or the online chat onsite;</li>
            <li>
              4. Pack all names, emails, apartment and floor plan information,
              and all the required supporting documents and send them to our
              email address.
            </li>
          </ul>
          <ul>
            <li>1. 首先从我们发布的租房信息中选择好公寓和房型;</li>
            <li>2. 如果你需要合租，建议你提前找好室友；</li>
            <li>
              3.
              确定好上述信息后，就通过微信、邮件、电话或者在线聊天联系团租负责人，并讨论租房情况；
            </li>
            <li>
              4.
              把姓名、要租的房子信息、房型、需要的租房文件发送到相应的团租邮箱，团租负责人会把申请信息及时发给公寓负责人处理，直到房子完成申请。
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          What supporting docuements are required to rent a room in
          Texas?德州租房子需要哪些文件呢？
        </Accordion.Header>
        <Accordion.Body>
          In Texas, passport and I-20/DS-2019 forms are in need when applying.
          The VISA is required before moving in. Some apartments also require
          bank statement or income proof to finish application. In Texas,
          apartments require the monthly income at least three times as the
          monthly rent or the total bank deposit reaches at least three times as
          the amount of the total rent.
          在德州，留学生在提交租房申请时必须要有“护照”和I-20或DS-2019表，在办理入住时，必须要出示VISA签证页。
          此外，很多公寓要求额外提供“银行存款证明”或者“收入证明”。德州房地产协会规定：租客提供的收入证明或存款证明金额要求满足至少是租金的三倍
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          How can I join the JJ GroupLease? 如何参加JJ团租？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            If you rent an apartment through us, then you are one member of JJ
            GroupLeasers and you can enjoy our services. When you are looking
            for an apartment, you can contact us via wechat, email or online
            chat. We will response you once we get the notice.
          </p>
          <p>
            如果您是通过JJ团租租的房子，那您就是JJ团租大家庭中的一员，您即可以享受到我们提供的服务。您可以通过微信、邮件、电话或在线给我们留言交流，我们将及时回复您。如果在线留言不在线，敬请留下您的邮箱，我们会第一时间通过邮件与您联系
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          How to choose an apartment?如何选择适合自己的房子？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            In each city, we provide a number of cooperating apartments for you.
            Those apartments are chosen carefully with consideration of safety,
            convenience, price, service, etc. Each apartment has its own
            features and prices. You should choose the apartment according to
            your budget and requirements. Usually, it's hard to find an
            apartment with good furnishes, good environment, convenient but also
            in cheap price.
          </p>
          <p>
            JJ团租在德州四个城市提供租房咨询服务，我们精心挑选了安全、便捷、服务好和性价比高的公寓和我们达成长久的合作。每个公寓都有其自己的优点和缺点，关键是要根据自己的实际情况选择一个适合自己的公寓，比如预算、对房子的要求等。通常，位置好的公寓租金高但可能没家具，有家具的公寓性价比高但位置可能没那么好。但是，有一点是肯定的，那就是一定有校车站点。
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          What's the differences between individual and non-individual lease
          apartments?独立合约和非独立合约公寓有什么区别？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            The differences lie in the floor plans with two bedrooms or more.
            The individual lease means that you are only responsible for the
            rent of your private room and the shared public space, utilities. It
            is better for you if you don't have any roommates, but you want to
            share a whole unit with others. The non-individual lease requires
            that all the tenants have the responsibility for the whole unit.
            Even though you don't have a roommate, you are asked to pay the rent
            of the whole unit. So, looking for roommates ahead is very
            important.
          </p>
          <p>
            对于1b1b的房子，也就是一居室来说，独立和非独立合约公寓没什么区别，区别就在于两居室及以上的房子。首先，独立合约的意思是每个人只需要对自己住的卧室负责租金，不管其他卧室是否空着，您都不用担心公寓会问你要钱。相反，非独立合约的公寓要求大家对整套房子一起负责，假如房子有空的卧室，您也要为那间空的卧室付租金。这就是最大的区别。所以，如果您没找到室友，那么独立合约公寓是您的选择；如果您找到室友并且大家居住时间一样，那可以考虑非独立合约公寓，当然也可以租独立合约的公寓。
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>
          What do those floor plans mean? 怎么看房型？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            US apartments usually have 1b-1b, 2b-1b, 2b-2b, 3b-2b, 3b-3b, 4b-2b
            and 4b-4b floor plans. The first "b" means "bedroom" and the second
            "b" means "bathroom". Therefore,
          </p>
          <ul>
            <li>
              (1) 1b-1b: 1 private bedroom and 1 private bathroom. The studio is
              also one kind of 1b-1b plans, with the bedroom and living room
              together.
            </li>
            <li>
              (2) 2b-1b: 2 private bedrooms and 1 shared bathroom. Shared living
              room and kitchen room.
            </li>
            <li>
              (3) 2b-2b: 2 private bedrooms and 2 shared bathroom. Shared living
              room and kitchen room.
            </li>
            <li>
              (4) 3b-2b: 3 private bedrooms and 2 shared bathroom. Shared living
              room and kitchen room.
            </li>
            <li>
              (5) 3b-3b: 3 private bedrooms and 3 shared bathroom. Shared living
              room and kitchen room.
            </li>
            <li>
              (6) 4b-2b: 4 private bedrooms and 2 shared bathroom. Shared living
              room and kitchen room.
            </li>
            <li>
              (7) 4b-2b: 2 private bedrooms and 4 shared bathroom. Shared living
              room and kitchen room.
            </li>
          </ul>
          <p>
            美国的公寓通常有不同的房形，比如1b-1b, 2b-1b, 2b-2b,
            3b-3b,4b-4b等，其中前面的“b”指的是“bedroom”，卧室，后面的“b”则指的是“bathroom”,浴室。比如，2b2b指的是包含两个卧室和两个浴室，也就是每个人都有独立卫浴，而2b1b就需要共享一个浴室。
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>
          Is there air conditioner inside the unit?德州的公寓房子里面有空调吗？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Of course, yes! Air conditioner is the necessity in Texas. You need
            air conditioner to cool in summer and to heat in winter. Almost all
            apartments install center air conditioners inside each unit. The
            tenants can control it by themselves. There is air change window in
            every bedroom. You can also control the window size.
          </p>
          <p>
            答案是肯定的，德州所有出租公寓都第一要求有空调，原因是因为德州夏天很热，温度可以高到100多华氏度。所以，德州有法律规定如果公寓房间里温度高于100华氏度超过24小时，公寓负责人必须要么立即把房间空调修好，要么给换一套空调正常工作的房间。另外，在冬天您也需要空调来制暖。德州大部分公寓房子内部装的空调都是中央空调，是租户可以自己在房间里控制开关、温度高低的中央空调，所以非常方便。
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>
          How many floors do the apartments have?德州学生公寓一般是几层楼高？
        </Accordion.Header>
        <Accordion.Body>
          <p>
            In US, most apartments are built with wood. It usually has 2~3
            floors high. So, there are a number of buildings in an
            apartment.There are some student apartments near campus which are
            modern built and often mucher higher. But the price is also much
            higher than the wood ones.
          </p>
          <p>
            众所周知，美国大部分的房子都是木头造的，因此不可能像钢筋水泥建筑一样盖很高，通常都是2-3层。所以，一个公寓就像一个社区，往往有很多栋公寓楼，每栋楼都是两三层。还有一点，美国的钢筋水泥公寓的价格比木头造的公寓高很多。
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQ;

// const FAQ_2 = ( ) => {
//   return(
//     <section className="u-align-center u-clearfix u-palette-1-light-2 u-section-2" id="sec-fc73">
//       <div className="u-clearfix u-sheet u-sheet-1">
//         <h2 className="u-text u-text-default u-text-1">FAQ</h2>
//         <div className="u-accordion u-expanded-width u-faq u-spacing-10 u-accordion-1">
//           <div className="u-accordion-item">
//             <a className="active u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-1" id="link-accordion-f600" aria-controls="accordion-f600" aria-selected="true">
//               <span className="u-accordion-link-text"> What's JJ GroupLease?&nbsp; JJ团租是什么组织？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 448 448"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-3ae2"></use></svg><svg className="u-svg-content" viewBox="0 0 448 448" id="svg-3ae2" style={{}}><path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"></path></svg></span>
//             </a>
//             <div className="u-accordion-active u-accordion-pane u-container-style u-white u-accordion-pane-1" id="accordion-f600" aria-labelledby="link-accordion-f600">
//               <div className="u-container-layout u-container-layout-1">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">JJ GroupLease is the name of the leasing team led by Jennifer. We provide free and professional apartment leasing for international students.</p>
//                   <p>JJ团租是一个由Jennifer领导的为留美学生提供免费专业租房服务的组织，目前经营范围限于德州。</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-2" id="link-accordion-72f4" aria-controls="accordion-72f4" aria-selected="false">
//               <span className="u-accordion-link-text"> Why choosing JJ GroupLease? 为什么选择JJ团租？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 448 448"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-05a3"></use></svg><svg className="u-svg-content" viewBox="0 0 448 448" id="svg-05a3" style={{}}><path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-2" id="accordion-72f4" aria-labelledby="link-accordion-72f4">
//               <div className="u-container-layout u-container-layout-2">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">JJ GroupLease provides you:</p>
//                   <p>Free and professional leasing consulting;</p>
//                   <p>Help to check in, sloving living issues and check out;</p>
//                   <p>Better deals renting apartment</p>
//                   <p>Responsible team members to give you a safe and warm home.</p>
//                   <p>JJ GroupLease is the best choice for you.</p>
//                   <p>&nbsp;</p>
//                   <p>JJ团租可以为您提供：</p>
//                   <p>1. 免费而专业的租房咨询服务；</p>
//                   <p>2. 免费协助办理入住、搬出以及沟通解决居住过程中遇到的问题；</p>
//                   <p>3. 团租向公寓尽可能争取更好的优惠给大家；</p>
//                   <p>4. 团租团队成员以一颗负责任的心为大家提供最好的服务。</p>
//                   <p>&nbsp;</p>
//                   <p>JJ团租是您最好的选择！</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-3" id="link-accordion-854e" aria-controls="accordion-854e" aria-selected="false">
//               <span className="u-accordion-link-text"> What are our strengths?我们的优势是什么？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 448 448" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-4a3a"></use></svg><svg className="u-svg-content" viewBox="0 0 448 448" id="svg-4a3a" style={{}}><path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-3" id="accordion-854e" aria-labelledby="link-accordion-854e">
//               <div className="u-container-layout u-container-layout-3">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">Unlike agencies that rent apartments online, JJ Group Lease based in Texas an have adequate knowledge about the place. Not only we can provide you with detailed information about the orientation of the house, but also help you solve problems at any time during your stay. We hope you can have a reliable friend when living alone in an foreign country. &nbsp;&nbsp;</p>
//                   <p>不同于仅仅通过线上的方式租房的中介， JJ团租常驻在德州，对当地的环境非常熟悉。不仅可以随时线下看房，直观的告诉你房子朝向、装修的优劣等等，也可以在你入住期间随时帮助你解决很多问题，让你在异国他乡有一份温暖的依靠</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-4" id="link-8d92" aria-controls="8d92" aria-selected="false">
//               <span className="u-accordion-link-text"> How to apply through JJ GroupLease? 那通过JJ团租租房的步骤是什么样的？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-cb94"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-cb94"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-4" id="8d92" aria-labelledby="link-8d92">
//               <div className="u-container-layout u-container-layout-4">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <ol>
//                     <li id="isPasted">&nbsp;Choosing one apartment and one floor plan first;</li>
//                     <li>Looking for suitable roommates;</li>
//                     <li>Contact us via wechat, email or the online chat onsite;</li>
//                     <li>&nbsp;Pack all names, emails, apartment and floor plan information, and all the required supporting documents and send them to our email address</li>
//                   </ol>
//                   <p>
//                     <br/>
//                   </p>
//                   <ol>
//                     <li>首先从我们发布的租房信息中选择好公寓和房型;</li>
//                     <li>如果你需要合租，建议你提前找好室友；</li>
//                     <li>确定好上述信息后，就通过微信、邮件、电话或者在线聊天联系团租负责人，并讨论租房情况；</li>
//                     <li>把姓名、要租的房子信息、房型、需要的租房文件发送到相应的团租邮箱，团租负责人会把申请信息及时发给公寓负责人处理，直到房子完成申请。</li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-5" id="link-6284" aria-controls="6284" aria-selected="false">
//               <span className="u-accordion-link-text"> What docuements are required to rent a room in Texas? 德州租房子需要哪些文件呢？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-5"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-2074"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-2074"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-5" id="6284" aria-labelledby="link-6284">
//               <div className="u-container-layout u-container-layout-5">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">In Texas, passport and I-20/DS-2019 forms are in need when applying. The VISA is required before moving in. Some apartments also require bank statement or income proof to finish application. In Texas, apartments require the monthly income at least three times as the monthly rent or the total bank deposit reaches at least three times as the amount of the total rent.</p>
//                   <p>在德州，留学生在提交租房申请时必须要有“护照”和I-20或DS-2019表，在办理入住时，必须要出示VISA签证页。 此外，很多公寓要求额外提供“银行存款证明”或者“收入证明”。德州房地产协会规定：租客提供的收入证明或存款证明金额要求满足至少是租金的三倍</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-6" id="link-7716" aria-controls="7716" aria-selected="false">
//               <span className="u-accordion-link-text"> How can I join the JJ GroupLease? 如何参加JJ团租？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-6"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-2af3"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-2af3"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-6" id="7716" aria-labelledby="link-7716">
//               <div className="u-container-layout u-container-layout-6">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">If you rent an apartment through us, then you are one member of JJ GroupLeasers and you can enjoy our services. When you are looking for an apartment, you can contact us via wechat, email or online chat. We will response you once we get the notice.</p>
//                   <p>&nbsp;如果您是通过JJ团租租的房子，那您就是JJ团租大家庭中的一员，您即可以享受到我们提供的服务。您可以通过微信、邮件、电话或在线给我们留言交流，我们将及时回复您。如果在线留言不在线，敬请留下您的邮箱，我们会第一时间通过邮件与您联系</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-7" id="link-7304" aria-controls="7304" aria-selected="false">
//               <span className="u-accordion-link-text"> How to choose an apartment?如何选择适合自己的房子？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-7"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-0e2e"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-0e2e"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-7" id="7304" aria-labelledby="link-7304">
//               <div className="u-container-layout u-container-layout-7">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">In each city, we provide a number of cooperating apartments for you. Those apartments are chosen carefully with consideration of safety, convenience, price, service, etc. Each apartment has its own features and prices. You should choose the apartment according to your budget and requirements. Usually, it's hard to find an apartment with good furnishes, good environment, convenient but also in cheap price.</p>
//                   <p>JJ团租在德州四个城市提供租房咨询服务，我们精心挑选了安全、便捷、服务好和性价比高的公寓和我们达成长久的合作。每个公寓都有其自己的优点和缺点，关键是要根据自己的实际情况选择一个适合自己的公寓，比如预算、对房子的要求等。通常，位置好的公寓租金高但可能没家具，有家具的公寓性价比高但位置可能没那么好。但是，有一点是肯定的，那就是一定有校车站点。</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-8" id="link-cd92" aria-controls="cd92" aria-selected="false">
//               <span className="u-accordion-link-text"> What's the differences between individual and non-individual lease apartments?独立合约和非独立合约公寓有什么区别？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-8"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-2a6d"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-2a6d"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-8" id="cd92" aria-labelledby="link-cd92">
//               <div className="u-container-layout u-container-layout-8">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">The differences lie in the floor plans with two bedrooms or more. The individual lease means that you are only responsible for the rent of your private room and the shared public space, utilities. It is better for you if you don't have any roommates, but you want to share a whole unit with others. The non-individual lease requires that all the tenants have the responsibility for the whole unit. Even though you don't have a roommate, you are asked to pay the rent of the whole unit. So, looking for roommates ahead is very important.</p>
//                   <p>对于1b1b的房子，也就是一居室来说，独立和非独立合约公寓没什么区别，区别就在于两居室及以上的房子。首先，独立合约的意思是每个人只需要对自己住的卧室负责租金，不管其他卧室是否空着，您都不用担心公寓会问你要钱。相反，非独立合约的公寓要求大家对整套房子一起负责，假如房子有空的卧室，您也要为那间空的卧室付租金。这就是最大的区别。所以，如果您没找到室友，那么独立合约公寓是您的选择；如果您找到室友并且大家居住时间一样，那可以考虑非独立合约公寓，当然也可以租独立合约的公寓。</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-9" id="link-164b" aria-controls="164b" aria-selected="false">
//               <span className="u-accordion-link-text"> What do those floor plans mean? 怎么看房型？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-9"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-b931"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-b931"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-9" id="164b" aria-labelledby="link-164b">
//               <div className="u-container-layout u-container-layout-9">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">US apartments usually have 1b-1b, 2b-1b, 2b-2b, 3b-2b, 3b-3b, 4b-2b and 4b-4b floor plans. The first "b" means "bedroom" and the second "b" means "bathroom". Therefore,</p>
//                   <ul>
//                     <li>1b-1b: 1 private bedroom and 1 private bathroom. The studio is also one kind of 1b-1b plans, with the bedroom and living room together.</li>
//                     <li>2b-1b: 2 private bedrooms and 1 shared bathroom. Shared living room and kitchen room.</li>
//                     <li>2b-2b: 2 private bedrooms and 2 shared bathroom. Shared living room and kitchen room.</li>
//                     <li>3b-2b: 3 private bedrooms and 2 shared bathroom. Shared living room and kitchen room.</li>
//                   </ul>
//                   <p>美国的公寓通常有不同的房形，比如1b-1b, 2b-1b, 2b-2b, &nbsp;3b-3b,4b-4b等，其中前面的“b”指的是“bedroom”，卧室，后面的“b”则指的是“bathroom”,浴室。比如，2b2b指的是包含两个卧室和两个浴室，也就是每个人都有独立卫浴，而2b1b就需要共享一个浴室。</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-10" id="link-675c" aria-controls="675c" aria-selected="false">
//               <span className="u-accordion-link-text"> Is there air conditioner inside the unit?德州的公寓房子里面有空调吗？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-10"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-1820"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-1820"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-10" id="675c" aria-labelledby="link-675c">
//               <div className="u-container-layout u-container-layout-10">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">Of course, yes! Air conditioner is the necessity in Texas. You need air conditioner to cool in summer and to heat in winter. Almost all apartments install center air conditioners inside each unit. The tenants can control it by themselves. There is air change window in every bedroom. You can also control the window size.</p>
//                   <p>答案是肯定的，德州所有出租公寓都第一要求有空调，原因是因为德州夏天很热，温度可以高到100多华氏度。所以，德州有法律规定如果公寓房间里温度高于100华氏度超过24小时，公寓负责人必须要么立即把房间空调修好，要么给换一套空调正常工作的房间。另外，在冬天您也需要空调来制暖。德州大部分公寓房子内部装的空调都是中央空调，是租户可以自己在房间里控制开关、温度高低的中央空调，所以非常方便。</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="u-accordion-item">
//             <a className="u-accordion-link u-active-white u-button-style u-hover-white u-white u-accordion-link-11" id="link-4259" aria-controls="4259" aria-selected="false">
//               <span className="u-accordion-link-text"> How many floors do the apartments have?德州学生公寓一般是几层楼高？</span><span className="u-accordion-link-icon u-icon u-text-grey-50 u-icon-11"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-b5b8"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-b5b8"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
//             </a>
//             <div className="u-accordion-pane u-container-style u-white u-accordion-pane-11" id="4259" aria-labelledby="link-4259">
//               <div className="u-container-layout u-container-layout-11">
//                 <div className="fr-view u-clearfix u-rich-text u-text">
//                   <p id="isPasted">In US, most apartments are built with wood. It usually has 2~3 floors high. So, there are a number of buildings in an apartment.There are some student apartments near campus which are modern built and often mucher higher. But the price is also much higher than the wood ones.</p>
//                   <p>美国大部分的房子都是木头造的，因此不可能像钢筋水泥建筑一样盖很高，通常都是2-3层。所以，一个公寓就像一个社区，往往有很多栋公寓楼，每栋楼都是两三层。还有一点，美国的钢筋水泥公寓的价格比木头造的公寓高很多。</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
