import Image from "next/image";

interface UserInterface {
  name: string;
  photo: string;
  online: boolean;
  registration: string;
  age: number;
}

const TableRow: React.FC<UserInterface> = ({
  name,
  photo,
  online,
  registration,
  age,
}) => {
  return (
    <tr className="table-row">
      <td className="table-data photo">
        <Image
          src={`https://tz.smart-ui.pro/${photo}`}
          width={60}
          height={60}
          alt="photo"
          className="photo-img"
        />
      </td>
      <td className="table-data name">{name}</td>
      <td className="table-data online">{online ? "online" : "offline"}</td>
      <td className="table-data registration">{registration}</td>
      <td className="table-data age">{age}</td>
      <td className="table-data btn">
        <button className="chat-button" disabled={!online}>
          Chat
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
