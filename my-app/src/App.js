import "./App.css";
function App() {
  return (
    <div>
      <p>STUDENT MARKS ENTRY</p>
      <div className="div2"><p className="parabox"> <form>
        <label>
          Name:
        </label><br/>
        <input type="text"/><br/>
        <label>
          Roll NO
        </label><br/>
        <input type="text"/><br/>
        <label>
          Mark1
        </label><br/>
        <input type="number"/><br/>
        <label>
          Mark2
        </label><br/>
        <input type="number"/><br/>
        <label>
          Mark3
        </label><br/>
        <input type="number"/><br/>
        <br/>
        <input  className="submit" type="submit" value="SUBMIT"/>
      </form></p></div>
    </div>
        
  );
}

export default App;
