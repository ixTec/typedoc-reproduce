type RadiomarkProps = {
  checked: boolean;
  error: boolean;
  isFocusVisible: boolean;
};

function Radiomark({ checked, error, isFocusVisible }: RadiomarkProps) {
  return (
    <div>
      {checked && (
        <span>
          {isFocusVisible} {error}
        </span>
      )}
    </div>
  );
}

export default Radiomark;
