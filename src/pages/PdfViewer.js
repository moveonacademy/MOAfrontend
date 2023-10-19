import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import {  useState,} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PdfViewer = (props) => {
  
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
  const [numPaginas, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };
  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }
  return (
    
    <div style={{height:"100%",width:"100%"}}>
    <Document style={{height:"100%",width:"100%"}} file={props.avatar} onLoadSuccess={onDocumentLoadSuccess}>
      <Page style={{height:"100%",width:"100%"}} pageNumber={pageNumber}  />
    </Document>
    <Stack spacing={2}>
      <Pagination  count={numPaginas} page={pageNumber} onChange={handleChange} />
    </Stack>
   
  </div>
  );
};

export default PdfViewer;