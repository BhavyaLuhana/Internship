import { useState } from "react";

export default function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const addContact = () => {
    if (name && phone && email) {
      setContacts([...contacts, { name, phone, email }]);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Book</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={addContact}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add Contact
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Contact"
          className="w-full p-2 border rounded my-4"
        />
        <ul>
          {filteredContacts.map((contact, index) => (
            <li
              key={index}
              className="p-2 border-b flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-gray-600 text-sm">{contact.phone} | {contact.email}</p>
              </div>
              <button
                onClick={() => deleteContact(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
