import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";

export default function NecSummary() {
  return (
    <div className="p-4">
      <PageHeader label="NEC Summary" goBack={false} menuOn={false} />
      <div className="flex flex-col gap-4">
        <Card href="../nec-notes/01" label="FIT" />
        <Card href="../nec-notes/02" label="SEF, OOAD" />
        <Card href="../nec-notes/03" label="Programming" />
        <Card href="../nec-notes/04" label="DSA, DBMS, AOS" />
        <Card href="../nec-notes/05" label="MP, COA" />
        <Card href="../nec-notes/06" label="ADA, SP, NP" />
        <Card href="../nec-notes/07" label="AINN" />
        <Card href="../nec-notes/08" label="Java, WT" />
        <Card href="../nec-notes/09" label="RTS, DS, CC" />
        <Card href="../nec-notes/10" label="Project Planning" />
      </div>
    </div>
  );
}
