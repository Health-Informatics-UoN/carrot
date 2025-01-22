/**
 * Marks inline content as mandatory or required by adding a red asterisk after it
 * @returns
 */
export function Mandatory({ children }) {
  return (
    <>
      {children}
      <span style={{ paddingLeft: ".5em", color: "red" }}>*</span>
    </>
  );
}
