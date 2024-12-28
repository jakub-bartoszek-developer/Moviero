import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, PageCount, StyledButton } from "./styled";

export const Pagination = ({ totalPages }) => {
 const [searchParams, setSearchParams] = useSearchParams();
 const [currentPage, setCurrentPage] = useState(
  () => parseInt(searchParams.get("page")) || 1
 );

 useEffect(() => {
  const page = parseInt(searchParams.get("page"));
  if (page && page !== currentPage) {
   setCurrentPage(page);
  }
 }, [searchParams, currentPage]);

 const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
  setSearchParams({ page: newPage });
 };

 return (
  <Container>
   <StyledButton
    onClick={() => handlePageChange(1)}
    disabled={currentPage === 1}
   >
    &lt;&lt;
   </StyledButton>
   <StyledButton
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
   >
    &lt;
   </StyledButton>
   <PageCount>
    Page {currentPage} of {totalPages}
   </PageCount>
   <StyledButton
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
   >
    &gt;
   </StyledButton>
   <StyledButton
    onClick={() => handlePageChange(totalPages)}
    disabled={currentPage === totalPages}
   >
    &gt;&gt;
   </StyledButton>
  </Container>
 );
};
