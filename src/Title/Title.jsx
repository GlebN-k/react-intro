const Title = () => {
  return (
    <div className="App__title">
      <h2>CSS Weather Forecast</h2>

      <svg
        width="35"
        height="28"
        viewBox="0 0 35 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 17.8638C0 17.5122 0.140625 17.187 0.421875 16.8882C0.738281 16.6157 1.06787 16.4795 1.41064 16.4795H4.68018C5.05811 16.4795 5.37451 16.6157 5.62939 16.8882C5.88428 17.1606 6.01172 17.4858 6.01172 17.8638C6.01172 18.2681 5.88428 18.6064 5.62939 18.8789C5.37451 19.1514 5.05811 19.2876 4.68018 19.2876H1.41064C1.03271 19.2876 0.703125 19.147 0.421875 18.8657C0.140625 18.5757 0 18.2417 0 17.8638ZM4.68018 6.64453C4.68018 6.2666 4.80322 5.9458 5.04932 5.68213C5.36572 5.40967 5.69531 5.27344 6.03809 5.27344C6.40723 5.27344 6.72803 5.40967 7.00049 5.68213L9.30762 8.00244C9.57129 8.31006 9.70312 8.63525 9.70312 8.97803C9.70312 9.37354 9.57568 9.70312 9.3208 9.9668C9.06592 10.2305 8.7583 10.3623 8.39795 10.3623C8.05518 10.3623 7.72559 10.2261 7.40918 9.95361L5.04932 7.67285C4.80322 7.37402 4.68018 7.03125 4.68018 6.64453ZM7.48828 25.6289C7.48828 25.2334 7.62451 24.9126 7.89697 24.6665C8.14307 24.4204 8.46387 24.2974 8.85938 24.2974H12.564L16.9409 20.1841C17.0815 20.0698 17.2397 20.0698 17.4155 20.1841L21.8584 24.2974H25.7476C26.1255 24.2974 26.4463 24.4292 26.71 24.6929C26.9824 24.9478 27.1187 25.2598 27.1187 25.6289C27.1187 26.0068 26.9824 26.332 26.71 26.6045C26.4463 26.877 26.1255 27.0132 25.7476 27.0132H20.9883C20.8477 27.0132 20.7114 26.978 20.5796 26.9077L17.1914 23.7173L13.8296 26.9077C13.7153 26.978 13.5835 27.0132 13.4341 27.0132H8.85938C8.48145 27.0132 8.15625 26.877 7.88379 26.6045C7.62012 26.332 7.48828 26.0068 7.48828 25.6289ZM8.79346 17.8638C8.79346 19.2261 9.0835 20.4653 9.66357 21.5815C9.69873 21.7485 9.81738 21.832 10.0195 21.832H12.6694C12.7749 21.832 12.8452 21.7925 12.8804 21.7134C12.9155 21.6343 12.9067 21.5464 12.854 21.4497C11.9575 20.3687 11.5093 19.1733 11.5093 17.8638C11.5093 16.2817 12.0718 14.937 13.1968 13.8296C14.3218 12.7222 15.6753 12.1685 17.2573 12.1685C18.8306 12.1685 20.1709 12.7222 21.2783 13.8296C22.3945 14.937 22.9526 16.2817 22.9526 17.8638C22.9526 19.1821 22.5088 20.3774 21.6211 21.4497C21.5596 21.5464 21.542 21.6343 21.5684 21.7134C21.6035 21.7925 21.6782 21.832 21.7925 21.832H24.4688C24.6533 21.832 24.7632 21.7485 24.7983 21.5815C25.3784 20.5005 25.6685 19.2612 25.6685 17.8638C25.6685 16.7212 25.4443 15.6313 24.9961 14.5942C24.5479 13.5571 23.9458 12.665 23.1899 11.918C22.4429 11.1621 21.5508 10.5645 20.5137 10.125C19.4766 9.67676 18.3911 9.45264 17.2573 9.45264C16.1147 9.45264 15.0205 9.67676 13.9746 10.125C12.9375 10.5645 12.0366 11.1621 11.272 11.918C10.5161 12.665 9.91406 13.5571 9.46582 14.5942C9.01758 15.6313 8.79346 16.7212 8.79346 17.8638ZM15.8599 5.27344V2.04346C15.8599 1.63916 15.9917 1.30957 16.2554 1.05469C16.519 0.791016 16.853 0.65918 17.2573 0.65918C17.6528 0.65918 17.978 0.791016 18.2329 1.05469C18.4966 1.31836 18.6284 1.64795 18.6284 2.04346V5.27344C18.6284 5.67773 18.4966 6.01172 18.2329 6.27539C17.978 6.53027 17.6528 6.65771 17.2573 6.65771C16.853 6.65771 16.519 6.53027 16.2554 6.27539C15.9917 6.01172 15.8599 5.67773 15.8599 5.27344ZM24.7852 8.97803C24.7852 8.62646 24.9126 8.30127 25.1675 8.00244L27.4482 5.68213C27.7207 5.40967 28.0503 5.27344 28.437 5.27344C28.8237 5.27344 29.1489 5.40967 29.4126 5.68213C29.6763 5.9458 29.8081 6.2666 29.8081 6.64453C29.8081 7.04883 29.6851 7.3916 29.439 7.67285L27.0659 9.95361C26.7671 10.2261 26.4375 10.3623 26.0771 10.3623C25.6992 10.3623 25.3872 10.2349 25.1411 9.97998C24.9038 9.71631 24.7852 9.38232 24.7852 8.97803ZM28.4634 17.8638C28.4634 17.4858 28.5864 17.1606 28.8325 16.8882C29.0874 16.6157 29.3994 16.4795 29.7686 16.4795H33.0776C33.4556 16.4795 33.7808 16.6157 34.0532 16.8882C34.3257 17.1606 34.4619 17.4858 34.4619 17.8638C34.4619 18.2505 34.3257 18.5845 34.0532 18.8657C33.7808 19.147 33.4556 19.2876 33.0776 19.2876H29.7686C29.3906 19.2876 29.0786 19.1514 28.8325 18.8789C28.5864 18.6064 28.4634 18.2681 28.4634 17.8638Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Title;