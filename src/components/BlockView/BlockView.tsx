import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import TxList from "../TxList";
import { hexToDate, hexToNumber } from "@etclabscore/eserialize";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Table, TableBody, TableCell, TableRow, Button, LinearProgress, Typography } from "@material-ui/core";

import BlockGasPrice from "./BlockGasPrice";

function BlockView(props: any) {
  const { block } = props;
  const history = useHistory();
  const { t } = useTranslation();

  if (!block) {
    return (<div>Loading...</div>);
  }

  const {
    timestamp, hash, parentHash, nonce, difficulty,
    stateRoot, transactionsRoot, receiptsRoot, transactions,
    gasUsed, gasLimit, size,
  } = block;

  const filledPercent = (hexToNumber(gasUsed) / hexToNumber(gasLimit)) * 100;

  return (
    <div>
      <Button
        onClick={() => { history.push(`/block/${block.hash}/raw`); }}
        style={{ position: "absolute", right: "10px", top: "75px" }}
      >
        View Raw
      </Button>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{t("Number")}</TableCell>
            <TableCell>{hexToNumber(block.number)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Gas Usage")}</TableCell>
            <TableCell>
              <Typography variant="caption">
                {hexToNumber(gasUsed)}/{hexToNumber(gasLimit)}
              </Typography>
              <LinearProgress
                style={{width: "150px"}}
                value={filledPercent}
                variant="determinate"
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Timestamp")}</TableCell>
            <TableCell>
              {t("Timestamp Date", { date: hexToDate(timestamp) })}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Hash")}</TableCell>
            <TableCell>{hash}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("ParentHash")}</TableCell>
            <TableCell>
              <Link
                component={({ className, children }: { children: any, className: string }) => (
                  <RouterLink className={className} to={`/block/${parentHash}`}>
                    {children}
                  </RouterLink>
                )}>
                {parentHash}
              </Link>
            </TableCell>
          </TableRow>

          {/* <TableRow>
            <TableCell>{t("Miner")}</TableCell>
            <TableCell>
              <Link
                component={({ className, children }: { children: any, className: string }) => (
                  <RouterLink className={className} to={`/address/${miner}`}>
                    {children}
                  </RouterLink>
                )}>
                {miner}
              </Link>
            </TableCell>
          </TableRow> */}

          <BlockGasPrice block={block} />

          <TableRow>
            <TableCell>{t("Gas Limit")}</TableCell>
            <TableCell>{hexToNumber(gasLimit)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Size")}</TableCell>
            <TableCell>{hexToNumber(size)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Nonce")}</TableCell>
            <TableCell>{hexToNumber(nonce)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Difficulty")}</TableCell>
            <TableCell>{hexToNumber(difficulty)}</TableCell>
          </TableRow>

          {/* <TableRow>
            <TableCell>{t("Extra Data")}</TableCell>
            <TableCell>{hexToString(extraData)}</TableCell>
          </TableRow> */}

          <TableRow>
            <TableCell>{t("State Root")}</TableCell>
            <TableCell>{stateRoot}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Transaction Root")}</TableCell>
            <TableCell>{transactionsRoot}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>{t("Receipts Root")}</TableCell>
            <TableCell>{receiptsRoot}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <TxList transactions={transactions} />
    </div>
  );
}

export default BlockView;
