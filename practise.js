let data = {
    Sophia: {
    id: 33,
    study: [
    {
            primary:
            [
                { school_name: "ABC primary school" },
                { location: "Peters burg" }
            ]
    },
            {
            secondary:
            [
                { school_name: "ABC secondary school"
                
                },
                
                { location: "St Lorence" }
            ]
            },
          ]
      }
    }
    const findSophiaSchool=data=>{
        const find = data.Sophia.study[1].secondary[0].school_name;
        console.log(find)
    }
    findSophiaSchool(data);