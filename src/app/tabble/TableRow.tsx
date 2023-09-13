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
        <Image src={photo} width={24} height={24} alt="photo" />
      </td>
      <td className="table-data name">{name}</td>
      <td
        className="table-data online"
        // style={{ flex: 2 }}
      >
        {online ? "online" : "offline"}
      </td>
      <td className="table-data registration">{registration}</td>
      <td className="table-data age">{age}</td>
      <td
        className="table-data btn"
        // style={{ display: "flex", flex: 4, justifyContent: "center" }}
      >
        <button className="chat-button" disabled={!online}>
          Chat
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
