import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/mantine";
import { useRowSelect } from "@table-library/react-table-library/select";

interface ICustomeTable {
  tableHeading: any;
  data: any[];
}

const CustomTable = (props: ICustomeTable) => {
  const { tableHeading, data } = props;
  const tabledata = { nodes: data };
  const mantineTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(mantineTheme);

  const select = useRowSelect(
    {
      nodes: data,
    },
    {
      onChange: onSelectChange,
    }
  );

  function onSelectChange(action: any, state: any) {
    console.log(action, state);
  }

  return (
    <Table
      className="custom-klass"
      data={tabledata}
      theme={theme}
      select={select}
    >
      {(tableList) => (
        <>
          <Header>
            <HeaderRow className="!bg-gray-50 !border !border-gray-900_19 p-3 rounded-md w-full">
              {tableHeading.map((item: any, index: number) => (
                <HeaderCell
                  key={index}
                  className="text-left text-blue_gray-900_87 text-xs w-auto !font-normal font-plusjakartasans"
                >
                  {item.label}
                </HeaderCell>
              ))}
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item: any) => (
              <Row key={item.id} item={item}>
                {Object.keys(item).map((el, index) => (
                  <Cell
                    className="text-left text-blue_gray-900 text-xs w-auto font-normal font-plusjakartasans"
                    key={index}
                  >
                    {item[el]}
                  </Cell>
                ))}
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

export default CustomTable;
