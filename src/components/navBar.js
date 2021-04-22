const Navigation=({ searchField })=>{
    return(
        <div className='Nav'>
            <div className='search'>
                <div class="ui icon input">
                    <input 
                    type="text" 
                    placeholder="Search..."
                    onChange={searchField}
                    />
                    <i class="search icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Navigation;