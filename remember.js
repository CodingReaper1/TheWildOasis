// compound component pattern
// render props pattern
// use form hook
const rect = e.target.closest("button").getBoundingClientRect(); // to find position where you are clicking
const [searchParams, setSearchParams] = useSearchParams(); // to get paramteres from url and update em
queryClient.invalidateQueries(); // to refetch data whenever maybe async function succesfully updated something in on serverside

// sorting, authentication, compount component, pagination, modalwindow.
