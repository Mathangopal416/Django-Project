const SaltInfo = ({ salts }) => (
  <div className="salt-info">
    <h3>Salt Contents</h3>
    <ul>
      {salts.map(salt => (
        <li key={salt.id}>{salt.chemical_name} ({salt.formulation})</li>
      ))}
    </ul>
  </div>
);
export default SaltInfo;
