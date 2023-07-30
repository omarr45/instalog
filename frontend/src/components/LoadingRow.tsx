export default function LoadingRow() {
  return (
    <tr className="grid animate-pulse grid-cols-3">
      <td className="space-y-10 px-6 py-6">
        <div className="h-2.5 w-48 rounded-full bg-gray-300"></div>
        <div className="block h-2.5 w-48 rounded-full bg-gray-300"></div>
        <div className="h-2.5 w-48 rounded-full bg-gray-300"></div>
      </td>
      <td className="space-y-10 px-6 py-6">
        <div className="h-2.5 w-48 rounded-full bg-gray-300"></div>
        <div className="h-2.5 w-48 rounded-full bg-gray-300"></div>
        <div className="h-2.5 w-48 rounded-full bg-gray-300"></div>
      </td>
      <td className="space-y-10 px-6 py-6">
        <div className="h-2.5 w-40 rounded-full bg-gray-300"></div>
        <div className="h-2.5 w-40 rounded-full bg-gray-300"></div>
        <div className="h-2.5 w-40 rounded-full bg-gray-300"></div>
      </td>
    </tr>
  );
}
