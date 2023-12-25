
export const handleSectionNavigation = (id: string) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const present = (value: any) => {
  if (!value) {
    return false
  }
  if (typeof value === 'object') {
    if (Object.keys(value).length > 0) {
      return true
    }
    return false
  }
  if (Array.isArray(value) || typeof value === 'string') {
    return value && value.length > 0
  }
  return !!value
}

export const createQueryParams = (filters: any) => {
  let query = ''

  if (present(filters)) {
    Object.keys(filters).forEach((key, index) => {
      if (typeof filters[key] === 'undefined' || filters[key] === null) {
        query = ''
      } else if (typeof filters[key] === 'object') {
        filters[key].forEach((el) => {
          query += `${index != 0 ? '&' : '?'}${key}[]=${el}`
        })
      } else {
        query += `${index != 0 ? '&' : '?'}${key}=${filters[key]}`
      }
    })
  }

  return query
}