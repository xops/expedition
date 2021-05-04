import * as React from "react";
import { hexToNumber } from "@etclabscore/eserialize";
import { useTranslation } from "react-i18next";
import { TableCell, TableRow } from "@material-ui/core";

function BlockGasPrice(props: any) {
  const { t } = useTranslation();
  const { transactions } = props.block;

  if (transactions.length === 0) { return null; }

  return (
    <>
      <TableRow>
        <TableCell>{t("Gas Price")}</TableCell>
        <TableCell>
          {hexToNumber(transactions[0].gasPrice)}
        </TableCell>
      </TableRow>

      {/* <TableRow>
        <TableCell>{t("Max Gas Price")}</TableCell>
        <TableCell>
          {hexToNumber(BigIntMaxBy(transactions, (tx: any) => BigInt(tx.gasPrice))?.gasPrice) || ""}
        </TableCell>
      </TableRow> */}
    </>
  );
}

export default BlockGasPrice;
