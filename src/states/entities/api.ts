
export const fetchUserProfile = (): Promise<any> => {
  return new Promise((res) => {
    res({
      name : 'Kamal Patel',
      email: 'kamalpatel125@gmial.com'
    })
  })
}

