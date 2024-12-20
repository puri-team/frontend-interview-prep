/**
 * Напишите функцию retryFetch поверх fetch API, которая отправляет запрос в случае неудачи N раз
 * Функция принимает те же параметры, что и fetch + количество попыток и возвращает Promise.
 ** Если метод запроса PUT, то повторных запросов не разрешаем ошибку в reject
 ** Если пользователь НЕАВТОРИЗОВАН или У НЕГО НЕТ ПРАВ, то повторный запрос не делаем ошибку в reject
 ** Если количество попыток закончилось, то вернуть последнюю ошибку в reject
 */

/**
 * @returns {Promise<unknown>}
 */
function retryFetch(url, { method, headers }, attempts = 0) {
    const params = {
        url,
        oprions: {
            method, headers
        }
    };

    return fetch(params).then(res => {
        if (res.ok !== undefined) {
            return response;
        } else {
            throw Error(response);
        }
    }).catch(err => {
        const isAuthError = [401, 403].includes(err.status);

        if (attempts > 0 || method !== 'PUT' || !isAuthError) {
            retryFetch(url, { method, headers }, --attempts);
        } else {
            throw Error(err);
        }
    });
}

retryFetch(url, { method: 'GET', headers: { Authorization: 'Bearer token' } }, 3);
