function Section() {
    return (
        <div id="problems">
            <div className="next">
                <p>HAVE ANY HOUSEHOLD PROBLEMS?</p>
                <p>Our experts will solve them in no time.</p>
                <div className="sel1">
                    <label>Service Category</label>
                    <select className="select">
                        <option>--Any--</option>
                        <option>Gerdening</option>
                        <option>Heating</option>
                        <option>Electricity</option>
                        <option>Paingting</option>
                        <option>Plumbing</option>
                        <option>Home Maintenance</option>
                    </select>
                </div>
                <div>
                    <label>Service *</label>
                    <select className="select">
                        <option>--Select--</option>
                        <option>lrrigation systems</option>
                        <option>Landscape desing</option>
                        <option>Tree and shrub pruning</option>
                        <option>Cleaning heating systems</option>
                        <option>lnstalling heating systems</option>
                        <option>Exterior paingting</option>
                    </select>
                </div>
                <div>
                    <label>Location</label>
                    <select className="select">
                        <option>--Any--</option>
                        <option>4578 Marmora Road,Glasgow</option>
                    </select>
                </div>
                <div>
                    <label>Employee</label>
                    <select className="select">
                        <option>--Any--</option>
                        <option>Jim Harris</option>
                        <option>Tom Allen</option>
                        <option>Mary Scott</option>
                        <option>Nina Cooper</option>
                        <option>Jake Bill</option>
                        <option>David Anderson</option>
                    </select>
                </div>
                <div className="btn">
                    <button>NEXT</button>
                </div>
            </div>
            <div className="text1">
                <h1>Have</h1>
                <h1>Any Household</h1>
                <h1>Problems?</h1>
                <h1>Our experts will solve them in no time.</h1>
            </div>
        </div>
    );
}

export default Section;
