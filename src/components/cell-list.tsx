import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";

interface CellListProps {
    //   initialValue: string;
    //   onChange(value: string): void;
}

const CellList: React.FC<CellListProps> = ({ }) => {
    const cells = useTypedSelector(({ cells: { order, data } }) => {
        return order.map((id) => data[id])
    });

    const renderedCells = cells.map(cell => (
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id}></AddCell>
            <CellListItem cell={cell} />
        </Fragment>
    ));

    return (
        <div >
            {renderedCells}
            <AddCell forceVisible={cells.length === 0} nextCellId={null}></AddCell>
        </div>
    );
};

export default CellList;
