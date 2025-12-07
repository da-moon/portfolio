// Header row for kubectl table
export function KubectlTableHeader() {
  return (
    <thead>
      <tr>
        <th>NAMESPACE</th>
        <th>NAME</th>
        <th>READY</th>
        <th>STATUS</th>
        <th>EXPERIENCE</th>
      </tr>
    </thead>
  );
}
