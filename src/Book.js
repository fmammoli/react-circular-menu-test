import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
// import birdVideo from "./Pexels Videos 3741.mp4";
import squid from "./pexels-valdemaras-d-1687678.jpg";
import moutains from "./pexels-aron-visuals-1643113.jpg";
import leaf from "./pexels-gustavo-cruz-1592119.jpg";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className={`page page-cover ${props.coverClass}`}
      ref={ref}
      data-density="hard"
    >
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{ backgroundImage: `url(${props.imgSrc})` }}
        ></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

// export default class Book extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       page: 0,
//       totalPage: 0,
//     };
//   }

//   nextButtonClick = () => {
//     this.flipBook.getPageFlip().flipNext();
//   };

//   prevButtonClick = () => {
//     this.flipBook.getPageFlip().flipPrev();
//   };

//   onPage = (e) => {
//     this.setState({
//       page: e.data,
//     });
//   };

//   componentDidMount() {
//     this.setState({
//       totalPage: this.flipBook.getPageFlip().getPageCount(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <HTMLFlipBook
//           width={550}
//           height={733}
//           size="stretch"
//           minWidth={315}
//           maxWidth={1000}
//           minHeight={400}
//           maxHeight={1533}
//           maxShadowOpacity={0.5}
//           showCover={true}
//           mobileScrollSupport={true}
//           onFlip={this.onPage}
//           onChangeOrientation={this.onChangeOrientation}
//           onChangeState={this.onChangeState}
//           className="demo-book"
//           ref={(el) => (this.flipBook = el)}
//         >
//           <PageCover>BOOK TITLE</PageCover>
//           <Page number={1}>Lorem ipsum...</Page>
//           <Page number={2}>Lorem ipsum...</Page>
//           <Page number={3}>Lorem ipsum...</Page>
//           <Page number={4}>Lorem ipsum...</Page>
//           <Page number={5}>Lorem ipsum...</Page>
//           <Page number={6}>Lorem ipsum...</Page>

//           <PageCover>THE END</PageCover>
//         </HTMLFlipBook>

//         <div className="container">
//           <div>
//             <button type="button" onClick={this.prevButtonClick}>
//               Previous page
//             </button>
//             [<span>{this.state.page}</span> of
//             <span>{this.state.totalPage}</span>]
//             <button type="button" onClick={this.nextButtonClick}>
//               Next page
//             </button>
//           </div>
//           <div>
//             State: <i>{this.state.state}</i>, orientation:{" "}
//             <i>{this.state.orientation}</i>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function Book(props) {
  // const squid = "./pexels-valdemaras-d-1687678.jpg";
  // const moutains = "./pexels-aron-visuals-1643113.jpg";
  // const leaf = "./pexels-gustavo-cruz-1592119.jpg";
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  let flipBook = {};
  let onChangeOrientation = {};
  let onChangeState = {};
  const nextButtonClick = () => {
    flipBook.getPageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBook.getPageFlip().flipPrev();
  };

  const onPage = (e) => {
    setPage(e.data);
  };

  console.log(HTMLFlipBook);
  useEffect(() => {
    setTotalPage(flipBook.getPageFlip().getPageCount());
  }, []);

  return (
    <div>
      <header>
        <h1>Book Section</h1>
      </header>
      <div className="container">
        <HTMLFlipBook
          width={400}
          height={500}
          size="fixed"
          autoSize={true}
          drawShador={true}
          maxShadowOpacity={1}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          onChangeState={props.onChangeState}
          className="flip-book"
          ref={(el) => (flipBook = el)}
        >
          <PageCover imgSrc={moutains} coverClass={"page-cover-top"}>
            BOOK TITLE
          </PageCover>
          <Page number={1} imgSrc={squid}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id luctus purus. Nulla tempor lorem ipsum. Morbi semper
            maximus justo in condimentum. Aenean porta, lorem ac aliquam tempor,
            turpis tortor pellentesque sapien, vitae faucibus quam dolor ac
            odio. Duis id magna eros. Ut mollis lectus eros, a volutpat lacus
            dapibus quis. Nulla vehicula arcu eget ex pulvinar, ut ultrices sem
            elementum. Vestibulum varius massa at dolor iaculis, nec suscipit
            purus dignissim. Mauris pharetra tellus vitae quam ultrices
            efficitur. Nullam vulputate, justo vitae sollicitudin fringilla,
            ipsum tellus aliquam nisi, quis dictum risus metus eget tortor.
            Praesent et sagittis nulla, sit amet feugiat odio. Donec sagittis,
            ligula et rhoncus elementum, felis velit eleifend nisl, sit amet
            placerat leo lacus in dolor.
          </Page>
          <Page number={2} imgSrc={moutains}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id luctus purus. Nulla tempor lorem ipsum. Morbi semper
            maximus justo in condimentum. Aenean porta, lorem ac aliquam tempor,
            turpis tortor pellentesque sapien, vitae faucibus quam dolor ac
            odio. Duis id magna eros. Ut mollis lectus eros, a volutpat lacus
            dapibus quis. Nulla vehicula arcu eget ex pulvinar, ut ultrices sem
            elementum. Vestibulum varius massa at dolor iaculis, nec suscipit
            purus dignissim. Mauris pharetra tellus vitae quam ultrices
            efficitur. Nullam vulputate, justo vitae sollicitudin fringilla,
            ipsum tellus aliquam nisi, quis dictum risus metus eget tortor.
            Praesent et sagittis nulla, sit amet feugiat odio. Donec sagittis,
            ligula et rhoncus elementum, felis velit eleifend nisl, sit amet
            placerat leo lacus in dolor.
          </Page>
          <Page number={3} imgSrc={leaf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id luctus purus. Nulla tempor lorem ipsum. Morbi semper
            maximus justo in condimentum. Aenean porta, lorem ac aliquam tempor,
            turpis tortor pellentesque sapien, vitae faucibus quam dolor ac
            odio. Duis id magna eros. Ut mollis lectus eros, a volutpat lacus
            dapibus quis. Nulla vehicula arcu eget ex pulvinar, ut ultrices sem
            elementum. Vestibulum varius massa at dolor iaculis, nec suscipit
            purus dignissim. Mauris pharetra tellus vitae quam ultrices
            efficitur. Nullam vulputate, justo vitae sollicitudin fringilla,
            ipsum tellus aliquam nisi, quis dictum risus metus eget tortor.
            Praesent et sagittis nulla, sit amet feugiat odio. Donec sagittis,
            ligula et rhoncus elementum, felis velit eleifend nisl, sit amet
            placerat leo lacus in dolor.
          </Page>
          <Page number={4} imgSrc={leaf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id luctus purus. Nulla tempor lorem ipsum. Morbi semper
            maximus justo in condimentum. Aenean porta, lorem ac aliquam tempor,
            turpis tortor pellentesque sapien, vitae faucibus quam dolor ac
            odio. Duis id magna eros. Ut mollis lectus eros, a volutpat lacus
            dapibus quis. Nulla vehicula arcu eget ex pulvinar, ut ultrices sem
            elementum. Vestibulum varius massa at dolor iaculis, nec suscipit
            purus dignissim. Mauris pharetra tellus vitae quam ultrices
            efficitur. Nullam vulputate, justo vitae sollicitudin fringilla,
            ipsum tellus aliquam nisi, quis dictum risus metus eget tortor.
            Praesent et sagittis nulla, sit amet feugiat odio. Donec sagittis,
            ligula et rhoncus elementum, felis velit eleifend nisl, sit amet
            placerat leo lacus in dolor.
          </Page>
          <Page number={5} imgSrc={squid}>
            Lorem ipsum...
          </Page>
          <Page number={6} imgSrc={leaf}>
            Lorem ipsum...
          </Page>
          {/* <Page number={4} videoSrc={birdVideo}>
          Lorem ipsum...
        </Page> */}

          <PageCover coverClass={"page-cover-bottom"}>>THE END</PageCover>
        </HTMLFlipBook>
      </div>
      <div className="container">
        <div>
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          [<span>{page}</span> of
          <span>{totalPage}</span>]
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Book;
