import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;
  // Filtering
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sorting
  const sortValue = searchParams.get("sortBy");
  // if (sortValue === "name-asc")
  //   filteredCabins = cabins.sort((a, b) => a.name.localeComapre(b.name));
  // if (sortValue === "name-desc")
  //   filteredCabins = cabins.sort((a, b) => b.name.localeComapre(a.name));
  if (sortValue === "regularPrice-asc")
    filteredCabins = cabins.sort((a, b) => a.regularPrice - b.regularPrice);
  if (sortValue === "regularPrice-desc")
    filteredCabins = cabins.sort((a, b) => b.regularPrice - a.regularPrice);
  if (sortValue === "maxCapacity-asc")
    filteredCabins = cabins.sort((a, b) => a.maxCapacity - b.maxCapacity);
  if (sortValue === "maxCapacity-desc")
    filteredCabins = cabins.sort((a, b) => b.maxCapacity - a.maxCapacity);

  // other way of sorting
  // const sortBy = searchParams.get("sortBy");
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedCabins = filteredCabins.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );
  // but at the bottom we should map over this sortedCabins, not the filtered ones

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {filteredCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Table>
    </Menus>
  );
}

export default CabinTable;
