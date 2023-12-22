const Captcha = ({ fn, check }) => {
	console.log('------------------------ JAVA CAPTCHA SOLUTION -------------------------');
	console.log(' ');
	console.log('Constructors have no return value -> remove void;');
	console.log('byte -> max. 127;');
	console.log(' ');
	console.log('------------------------ JAVA CAPTCHA SOLUTION -------------------------');

	return (
	<fieldset>
		<div className="control-box mb-3">
			<strong className="form-headline">Please solve the Java captcha</strong>					
		</div>
		<div className="p-2 mx-3 bg-body-tertiary">
			<code>
				<input type="text" onChange={fn} className="code-input w-100" defaultValue="public class Human {" />
				<input type="text" onChange={fn} className="code-input w-100 mt-2" defaultValue="  private byte age;" />
				<input type="text" onChange={fn} className="code-input w-100 mt-2" defaultValue={check ? "  public Human(byte age) {" : "  public void Human(byte age) {"} />
				<input type="text" onChange={fn} className="code-input w-100" defaultValue="    this.age = age;" />
				<input type="text" onChange={fn} className="code-input w-100" defaultValue="  }" />
				<input type="text" onChange={fn} className="code-input w-100 mt-2" defaultValue="  public static void main(String[] args) {" />
				<input type="text" onChange={fn} className="code-input w-100" defaultValue={check ? "    Human p = new Human(127);" : "    Human p = new Human(128);"} />
				<input type="text" onChange={fn} className="code-input w-100" defaultValue="    System.out.println(p);" />
				<input type="text" onChange={fn} className="code-input w-100" defaultValue="  }" />
				<input type="text" onChange={fn} className="code-input w-100" defaultValue="}" />
			</code>
		</div>
	</fieldset>
	);
}

export default Captcha;